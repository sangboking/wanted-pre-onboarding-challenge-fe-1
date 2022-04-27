import React, { useState } from 'react'
import * as styled from './PostModal.style'
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {postModalAtom} from '../SceduleAtoms';
import FbPostModal from '../../Components/PostModal/FbPostModal/FbPostModal';
import InstaPostModal from '../../Components/PostModal/InstaPostModal/InstaPostModal';
import TwitPostModal from '../../Components/PostModal/TwitPostModal/TwitPostModal'
import PostModalRight from '../../Components/PostModal/PostModalRight/PostModalRight';
import { loadingAtom, postImgAtom, postImgPreviewAtom } from '../../atom';
import { Watch } from 'react-loader-spinner';

export default function PostModal() {
  const [postModal,setPostModal] = useRecoilState(postModalAtom);
  const [tabState, setTabState] = useState(1);
  const setPostImgPreview = useSetRecoilState(postImgPreviewAtom);
  const setPostImg = useSetRecoilState(postImgAtom);
  const loading = useRecoilValue(loadingAtom);

  const postModalClick = ()=>{
    setPostModal(!postModal);
    setPostImgPreview(null);
    setPostImg(null);
  };
  
  return (
    <>
      {
         postModal &&
         <styled.ModalBack>
           <styled.PostBox>
             {
              tabState === 1 
              ? <FbPostModal tabState={tabState} setTabState={setTabState}/> 
              : tabState === 2 
                ? <InstaPostModal tabState={tabState} setTabState={setTabState}/> 
                : <TwitPostModal tabState={tabState} setTabState={setTabState}/>
             }   
 
             <styled.VerticalLine/>

            {
              loading &&  
              <styled.LoadingWrapper>
                <Watch
                    height="100"
                    width="100"
                    color="navy"
                    ariaLabel='loading'
                />
                <h1>로딩중입니다..</h1>
             </styled.LoadingWrapper>
            }

             <PostModalRight postModalClick={postModalClick}/>

             

           </styled.PostBox>
       </styled.ModalBack>
       }
    </>
  )
}

