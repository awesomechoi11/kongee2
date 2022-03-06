import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';
import NameBanner from './threestuff/NameBanner/NameBanner';
// import nameBanner from '../public/images/nameBanner.jpg';
import { Suspense } from 'react';

export default function ThreeStuff() {
  //https://stackblitz.com/files/github-tlpwx5/github/awesomechoi11/kongee2/master/public/images/Frame%20209.jpg

  return (
    <Canvas
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      <Suspense fallback={null}>
        <NameBanner />
      </Suspense>
    </Canvas>
  );
}
