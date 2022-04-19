import React, { useState } from 'react'
import * as styled from './PostModal.style'
import { useRecoilState} from 'recoil';
import {postModalAtom} from '../SceduleAtoms';
import FbPostModal from '../../Components/PostModal/FbPostModal/FbPostModal';
import InstaPostModal from '../../Components/PostModal/InstaPostModal/InstaPostModal';
import TwitPostModal from '../../Components/PostModal/TwitPostModal/TwitPostModal'
import PostModalRight from '../../Components/PostModal/PostModalRight/PostModalRight';
import { postImgPreviewAtom } from '../../atom';

export default function PostModal() {
  const [postModal,setPostModal] = useRecoilState(postModalAtom);
  const [tabState, setTabState] = useState(1);
  const [postImgPreview, setPostImgPreview] = useRecoilState(postImgPreviewAtom);

  const postModalClick = ()=>{
    setPostModal(!postModal);
    setPostImgPreview(null);
  }
  

  return (
    <>
      {
         postModal === true 
         ?
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
             
             <PostModalRight postModalClick={postModalClick}/>

           </styled.PostBox>
       </styled.ModalBack>
        :null
       }
    </>
  )
}

