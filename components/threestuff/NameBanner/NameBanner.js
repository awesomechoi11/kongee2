import fragment from './fragment.glsl';
import { useEffect, useState } from 'react';
import { useTexture } from '@react-three/drei';

export default function NameBanner() {
  // const texture = useLoader(TextureLoader, '/api/images/nameBanner.jpg');

  const texture = useTexture('/api/images/Frame 209.jpg');

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  if (!ready) return null;
  // 1128 x 186
  return (
    <mesh position={[2, 1, 3]}>
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
