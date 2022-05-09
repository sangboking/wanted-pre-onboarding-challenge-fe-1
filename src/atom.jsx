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

export const loadingAtom = atom({
  key:"loading",
  default:false
})

export const postModalAtom = atom({
  key:"postModal",
  default:false
})

export const sceduleColorAtom = atom({
  key:"sceduleColor",
  default:'#3C4165'
})

export const sceduleMenuColorAtom = atom({
  key:"sceduleMenuColor",
  default:'#fbfbfb'
})

export const inboxMenuColorAtom = atom({
  key:"inboxMenuColor",
  default:'#fbfbfb'
})

export const inboxColorAtom = atom({
  key:"inboxColor",
  default:'#3C4165'
})

export const inboxDropAtom = atom({
  key:"inboxDrop",
  default:false
})

