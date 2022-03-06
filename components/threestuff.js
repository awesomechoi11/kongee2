import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import nameBanner from '../public/images/nameBanner.jpg';

function Scene() {
  const colorMap = useLoader(TextureLoader, '/api/images/nameBanner.jpg');
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
}

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
      {/* Your regular scene contents go here, like always ... */}
      {/* <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer> */}
      <Scene />
    </Canvas>
  );
}
