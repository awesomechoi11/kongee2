import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import fragment from './fragment.glsl';
import { useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';

export default function NameBanner() {
  // const texture = useLoader(TextureLoader, '/api/images/nameBanner.jpg');

  const texture = useTexture('/api/images/nameBanner.jpg');

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  if (!ready) return null;

  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        uniforms={{
          bannerTexture: {
            type: 't',
            value: texture,
          },
        }}
        fragmentShader={fragment}
      />
    </mesh>
  );
}
