import {atom} from 'recoil';

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


//recoil atoms 보관