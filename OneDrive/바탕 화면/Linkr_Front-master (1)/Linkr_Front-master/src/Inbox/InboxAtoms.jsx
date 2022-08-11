import {atom} from 'recoil';

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