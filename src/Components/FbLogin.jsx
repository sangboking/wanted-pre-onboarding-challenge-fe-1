import React, { useEffect, useState} from 'react';
import axios from 'axios';

export default function FbLogin() {

  const [accessToken,setAccessToken] = useState();
  const [pageAccessToken,setPageAccessToken] = useState();
  const [userId,setUserId] = useState();
  const [pageId,setPageId] = useState();
  const [postText,setPostText] = useState('');
  
  const appId = process.env.REACT_APP_FB_APP_ID;
  const fbSrc = process.env.REACT_APP_FB_SRC;

 
  useEffect(() => {
    setFBAsyncInit();
    loadFbSdk();
  }, []);

  const setFBAsyncInit = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        version: 'v13.0',
        appId:appId,
        xfbml: true,
        
      });
      window.FB.AppEvents.logPageView();
    };
  }

  const loadFbSdk = () => {
    ((d, s, id) => { 
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = fbSrc;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  const FbLogin = () => {
    window.FB.login((response)=>{
      if(response.status === 'connected'){
        console.log(response)
        setAccessToken(response.authResponse.accessToken);
        setUserId(response.authResponse.userID)
      }
      else if(response.status === 'not_authorized'){
        console.log('사용자가 페이스북에 로그인했지만 웹에서는 로그인하지 않았습니다.')
      }else{
        console.log('사용자가 페이스북에 로그인하지 않았으므로 웹페에지에 로그인 했는지 알수 없습니다. 혹은 로그아웃 되었습니다.')
      }
    },{scope: 'pages_show_list'})
  }

  const FbLogOut = () => {
    window.FB.logout((response)=>{
      setAccessToken(null);
      setUserId(null);
    })
  }

  const CheckFbLogin = () => {
    window.FB.getLoginStatus((response)=>{
      if(response.status === 'connected'){
        console.log('로그인 되었습니다.')
        console.log(userId)
        console.log(accessToken)
        console.log(pageId)
        console.log(pageAccessToken)
      }else{
        console.log('로그인 되지 않았습니다.')
      }
    })
  }

  useEffect(() => {
    if(accessToken){
      axios.get(`https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`)
      .then((response) => setPageId(response.data.data[0].id))
      .catch(console.log('page id 정보를 받아오지 못했습니다.'))

      axios.get(`https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`)
      .then((response) => setPageAccessToken(response.data.data[0].access_token))
      .catch(console.log('page access token 정보를 받아오지 못했습니다.'))
    }
  },[userId,accessToken])

  const PostFbPage = () => {
    axios.post(`https://graph.facebook.com/${pageId}/feed?message=${postText}&access_token=${pageAccessToken}`)
    .then((response) => console.log(response))
  }

  //back-end 전송 데이터

  const FbInfoData = () => {
    axios.post("url",{
      userId:{userId},
      accessToken:{accessToken},
      pageAccessToken:{pageAccessToken}
    })
    .then((response) => {console.log(response)})
    .catch( console.log('post 요청 실패 입니다.'))
  }
  
  


  return (
    <div>
      <button onClick={CheckFbLogin}>페이스북 로그인 상태 확인</button>
      <button onClick={FbLogin}>FB로그인</button>
      <button onClick={FbLogOut}>FB로그아웃</button>
      <button onClick={PostFbPage}>FB글 포스팅</button>
      <textarea value={postText} onChange={(e)=>{setPostText(e.target.value)}}></textarea>
    </div>
    
  )

}
