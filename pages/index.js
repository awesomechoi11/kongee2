import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useRecoilTransition } from '../components/Transition';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import Navbar from '../components/Navbar';
import Moon from '../components/Home/Moon';
import { useRecoilState } from 'recoil';
import { themeAtom } from '../components/RecoilTheme';
import clsx from 'clsx';

export default function Home() {
  const {
    transitionVariantId,
    transitionState,
    animationState,
    startEnter,
    endEnter,
    startExit,
    endExit,
  } = useRecoilTransition('home');

  let anim = useAnimation();

  useEffect(() => {
    anim
      .start('entered', {
        delay: 1,
      })
      .then(endEnter);
  }, []);

  const nameBannerVariants = {
    initial: { opacity: 0 },
    entered: { opacity: 1 },
    exited: { opacity: 0 },
  };

  const [darkMode, setTheme] = useRecoilState(themeAtom);

  console.log(transitionState, animationState);
  return (
    <motion.div
      animate={anim}
      initial="initial"
      className={clsx('page', !darkMode && 'light-mode')}
    >
      <Navbar />
      <div>
        <motion.div variants={nameBannerVariants} className="banner">
          <div>Sally (Hyunji) Kim</div>
          <Moon />
        </motion.div>
      </div>
    </motion.div>
  );
}
