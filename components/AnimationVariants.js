import { merge } from 'lodash';

export const combineVariants = (...variants) => {
  return merge({}, ...variants);
};

export const fadeInOut = {
  initial: { opacity: 0 },
  entered: { opacity: 1 },
  exited: { opacity: 0 },
};

export const slideInOutSmall_X = {
  initial: { x: 0 },
  entered: { x: 10 },
  exited: { x: 0 },
};
