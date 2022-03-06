import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';

export default function ThreeStuff() {
  return (
    <Canvas style={{
      position: 'absolute',
      left:0,
      top: 0
    }}>
      {/* Your regular scene contents go here, like always ... */}
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
}
