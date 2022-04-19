import {atom} from 'recoil';

export const postTextAtom = atom({
  key:"postText",
  default:``
})

export const postImgAtom = atom({
  key:"postImg",
  default:null
})

export const postImgPreviewAtom = atom({
  key:"postImgPreview",
  default:[]
})