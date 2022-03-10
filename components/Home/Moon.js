import { motion } from 'framer-motion';
import { useState } from 'react';

const rayVariants = {
  dark: (custom) => {
    const angle = (360 / 12) * custom;
    const rads = (angle / 180) * Math.PI;
    const length = 24;
    const offset = -1;
    return {
      width: '0rem',
      rotate: `${angle + 180}deg`,
      x: length * Math.cos(rads) + 'rem',
      y: offset + length * Math.sin(rads) + 'rem',
      transition: { duration: 0.3, type: 'tween', delay: custom * 0.027 },
    };
  },

  light: (custom) => {
    const angle = (360 / 12) * custom;
    const rads = (angle / 180) * Math.PI;
    const length = 38;
    const offset = -1;
    return {
      width: '12rem',
      rotate: `${angle + 180}deg`,
      x: length * Math.cos(rads) + 'rem',
      y: offset + length * Math.sin(rads) + 'rem',
      transition: { duration: 0.3, type: 'tween', delay: custom * 0.02 },
    };
  },
};

const moonVariants = {
  dark: {
    rotate: '-30deg',
  },
  light: {
    rotate: '30deg',
  },
};

const ball1Variants = {
  dark: {
    width: '33rem',
    height: '33rem',
    transition: { delay: 0.2, duration: 0.3 },
  },
  light: {
    width: '42rem',
    height: '42rem',
    transition: { duration: 0.3 },
  },
};
const ball2Variants = {
  dark: {
    x: '27rem',
    transition: { duration: 0.2, delay: 0.3 },
  },
  light: {
    x: '42rem',
    transition: { duration: 0.4 },
  },
};
export default function Moon() {
  const [toggle, setToggle] = useState(false);
  const animState = toggle ? 'light' : 'dark';

  return (
    <motion.div
      id="moon"
      variants={moonVariants}
      onClick={() => setToggle(!toggle)}
      animate={animState}
      transition={{
        duration: 0.5,
      }}
    >
      <motion.div className="ball1 circle" variants={ball1Variants} />
      <motion.div
        className="ball2 circle"
        variants={ball2Variants}
        transition={{ duration: 0.5, type: 'spring' }}
      />
      <motion.div className="rays">
        {[...Array(12)].map((val, index) => (
          <motion.div
            key={index}
            custom={index + 1}
            className={`ray ray${index}`}
            variants={rayVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
