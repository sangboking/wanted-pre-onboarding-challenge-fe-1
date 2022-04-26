import {atom} from 'recoil';

export const postTextAtom = atom({
  key:"postText",
  default:``
})

export const postImgAtom = atom({
  key:"postImg",
  default:null,
  dangerouslyAllowMutability: true
})

export const postImgPreviewAtom = atom({
  key:"postImgPreview",
  default:[]
})

