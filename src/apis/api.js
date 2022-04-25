import axios from "axios";

//페이스북 linkr-app 연결
export const setFBAsyncInit = () => {
  window.fbAsyncInit = () => {
    window.FB.init({
      version: 'v13.0',
      appId:process.env.REACT_APP_FB_APP_ID,
      xfbml: true,
      cookie: true,
    });
    window.FB.AppEvents.logPageView();
  };
}

//페이스북 sdk 호출
export const loadFbSdk = () => {
  ((d, s, id) => { 
    const element = d.getElementsByTagName(s)[0];
    const fjs = element;
    let js = element;
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = process.env.REACT_APP_FB_SRC;
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}

//페이스북 로그인
export const fbLogin = (setFbConnectComment,setPageAccessToken,setPageUserId,setPageName) => {
  window.FB.login((response)=>{
    if(response.status === 'connected'){
      console.log(response);
      setFbConnectComment(true);
      return getPageInfo(response.authResponse.userID,response.authResponse.accessToken,setPageAccessToken,setPageUserId,setPageName)
    }
    else if(response.status === 'not_authorized'){
      console.log('사용자가 페이스북에 로그인했지만 웹에서는 로그인하지 않았습니다.')
    }else{
      console.log('사용자가 페이스북에 로그인하지 않았으므로 웹페에지에 로그인 했는지 알수 없습니다. 혹은 로그아웃 되었습니다.')
      setFbConnectComment(false);
    }
  },{scope:'user_likes, pages_show_list, pages_manage_posts, pages_messaging, pages_read_engagement'})
} 

//페이스북 페이지 정보
export const getPageInfo = async (userId,accessToken,setPageAccessToken,setPageId,setPageName) => {
  // const response = await fetch(`https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`)
  // return response.json();
  axios.get(`https://graph.facebook.com/${userId}/accounts?access_token=${accessToken}`)
  .then((response) => {
    console.log(response)
    setPageAccessToken(response.data.data[0].access_token);
    setPageId(response.data.data[0].id);
    setPageName(response.data.data[0].name);
  })
};

//페이스북 페이지 게시글 가져오기
export const getFbPost = async (brandId) => {
  const response = await fetch(`/api/brands/${brandId}/posts`)
  return response.json();
}

//사용자 정보
export const getAccountInfo = async () => {
  const response = await fetch('/api/accounts')
  return response.json();
}

//브랜드 정보 
export const getBrand = async () => {
  const response = await fetch('/api/brands');
  return response.json();
}

//브랜드 상세정보
export const getDetailBrand = async (brandId) => {
  const response = await fetch(`/api/brands/${brandId}`)
  return response.json();
}

//브랜드 추가 && 소셜등록
export const addBrand = async (brandName,brandTime,pageAccessToken,pageId,pageName,setBrandModal,setFbConnectComment,twitOuathToken,twitOauthSecret,twitScreenName,twitUserId,setTwitConnectComment) => {
  const brandData = {
    brandName :brandName,
    timeZone :`Asia/${brandTime}`
  }
  try{
    const response = await axios.post('/api/brands',JSON.stringify(brandData),{headers:{"Content-Type":`application/json`}})
    const facebookData = {
      pageId : pageId,
      pageName : pageName,
      pageAccessToken : pageAccessToken
    }
    const twitData = {
      oauthToken : twitOuathToken,
      oauthSecret : twitOauthSecret,
      userId : twitUserId,
      screenName : twitScreenName
    }
    const brandId = response.data.result.id
    if(facebookData.pageId){
      const addFacebook = await axios.post(`/api/brands/${brandId}/FACEBOOK`,JSON.stringify(facebookData),{headers:{"Content-Type":`application/json`}})
      console.log(addFacebook);
      setBrandModal(false);
      setFbConnectComment(false);
    }

    if(twitData.oauthToken){
      const addTwit = await axios.post(`/api/brands/${brandId}/TWITTER`,JSON.stringify(twitData),{headers:{"Content-Type":`application/json`}})
      console.log(addTwit);
      setTwitConnectComment(false);
      setBrandModal(false);
    }
    
   
  }catch(error){
    console.log(error);
  }
}

//twitter setup
export const setTwitInit = () => {
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
  
    return t;
  }(document, "script", "twitter-wjs"));
}


