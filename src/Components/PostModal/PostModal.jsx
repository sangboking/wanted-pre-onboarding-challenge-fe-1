import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import * as styled from './PostModal.style'
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {postModalAtom} from '../../../atom';
import FbPostModal from '../../../Components/PostPreview/FbPreview/FbPreview';
import InstaPostModal from '../../../Components/PostPreview/InstaPreview/InstaPreview';
import TwitPostModal from '../../../Components/PostPreview/TwitPreview/TwitPreview';
import PostModalRight from '../../../Components/PostModalRight/PostModalRight';
import { loadingAtom, postImgAtom, postImgPreviewAtom } from '../../../atom';
import { Grid } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { getDetailBrand } from '../../../apis/api';

export default function PostModal() {
  const [postModal,setPostModal] = useRecoilState(postModalAtom);
  const [tabState, setTabState] = useState(1);
  const setPostImgPreview = useSetRecoilState(postImgPreviewAtom);
  const setPostImg = useSetRecoilState(postImgAtom);
  const loading = useRecoilValue(loadingAtom);
  const {brandId} = useParams();

  const postModalClick = ()=>{
    setPostModal(!postModal);
    setPostImgPreview(null);
    setPostImg(null);
  };

  const {data,isLoading} = useQuery('detailBrandInfo', () => getDetailBrand(brandId),
  {
    refetchOnWindowFocus : false,
  });

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
                <Grid
                    height="30"
                    width="30"
                    color="navy"
                    ariaLabel='loading'
                />
                <styled.LoadingComment>게시글 작성중 입니다..</styled.LoadingComment>
             </styled.LoadingWrapper>
            }

             <PostModalRight postModalClick={postModalClick} data={data} isLoading={isLoading}/>

             

           </styled.PostBox>
       </styled.ModalBack>
       }
    </>
  )
}

