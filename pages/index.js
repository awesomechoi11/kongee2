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
      id="home"
    >
      <Navbar />
      <div>
        <motion.div variants={nameBannerVariants} className="banner">
          <div>Sally (Hyunji) Kim</div>
          <Moon />
        </motion.div>
        <div className="ta-center">
          <b>Visual & Product Designer</b> based in <b>Cupertino, CA</b>.
        </div>
      </div>
      <div className="introduction">
        I design and create to <b>leave positive impacts in my community</b>{' '}
        through <b>thought, delightful design</b>.
        <br />
        <br />
        Currently designing @ <b>Riot Games</b>. Previously @{' '}
        <b>University of Michigan</b> {'&'} <b>URx</b>.
        <br />
        <br />
        Now looking for full-time Product Designer positions starting in
        September 2022.
      </div>
    </motion.div>
  );
}
