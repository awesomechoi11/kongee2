import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useRecoilTransition } from '../components/Transition';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import Navbar from '../components/Navbar';
import Moon from '../components/Home/Moon';

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

  console.log(transitionState, animationState);
  return (
    <motion.div animate={anim} initial="initial" className="page">
      <Navbar />
      <div>
        <motion.div variants={nameBannerVariants}>
          <div className="name">Sally (Hyunji) Kim</div>
          <Moon />
        </motion.div>
      </div>
    </motion.div>
  );
}
