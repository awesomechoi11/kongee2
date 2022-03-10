import { useRouter } from 'next/dist/client/router';
import { atom, atomFamily, useRecoilState } from 'recoil';

// true is dark mode
// false is light mode
export const themeAtom = atom({
  key: 'themeAtom',
  default: true,
});
