import { useRouter } from 'next/dist/client/router';
import { atom, atomFamily, useRecoilState } from 'recoil';

/**
 * transition state controls loading, page state, and
 * it is locally scoped to a single page
 * it requires a global transitionVariantId to be "default", "any", or a unique identifer that specifies a animation variant
 *
 * upon entering a page, to prevent its state being "exiting" if it was view previously, its transition state is reset at every exit
 *
 * for example, going from page A to page B, there may be multiple ways of exiting transitions,
 * to gracefully enter transition, it may require the specific exit transition id
 *
 */
const transitionVariantIdAtom = atom({
  key: 'transitionVariantIdAtom',
  default: 'default',
});
const transitionStateAtomFamily = atomFamily({
  key: 'transitionStateAtomFamily',
  default: 'entering',
});
export const useRecoilTransition = (transitionId) => {
  const [transitionState, setTransitionState] = useRecoilState(
    transitionStateAtomFamily(transitionId)
  );
  const transitionVariantId = useRecoilState(transitionVariantIdAtom);
  const router = useRouter();

  const endEnter = () => setTransitionState('entered');
  const startExit = () => setTransitionState('exiting');
  const endExit = async (...routerParams) => {
    router.push(...routerParams);
    // reset its value to entering for the next time, since recoil doesnt have reset on load
    setTransitionState('entering');
  };

  const animationState = {
    entering: 'entered',
    entered: 'entered',
    exiting: 'exited',
  }[transitionState];

  return {
    transitionVariantId,
    animationState,
    transitionState,
    startExit,
    endExit,
    endEnter,
  };
};
