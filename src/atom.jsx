import {atom} from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoAtom = atom({
  key:"userInfo",
  default:'',
  effects_UNSTABLE: [persistAtom]
})