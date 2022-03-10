// import fragment from './fragment.glsl';
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

  const vertex = `
  varying vec2 vUv;
  void main() {
    gl_Position = vec4(position, 1.0);
    vUv = uv;
  }
  `;
  const fragment = `
  uniform sampler2D bannerTexture;
  varying vec2 vUv;
  
  vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
    vec4 color = vec4(0.0);
    vec2 off1 = vec2(1.411764705882353) * direction;
    vec2 off2 = vec2(3.2941176470588234) * direction;
    vec2 off3 = vec2(5.176470588235294) * direction;
    color += texture2D(image, uv) * 0.1964825501511404;
    color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
    color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
    color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
    color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
    return color;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / vec2(1128,186);
    vec4 nameBanner = texture2D( bannerTexture, uv );

    for(int i = 0; i < 8; i++){
      vec2 direction = i % 2 == 0 ? vec2(0,1): vec2(1,0);

      nameBanner = blur13(bannerTexture, uv, vec2(1128,186), direction);
      // float r = nameBanner.r;
      // if(r < 0.9){
      //    nameBanner = vec4(0.);
      // }
      // nameBanner = blur13(bannerTexture, uv, vec2(1128,186), direction);
    }

    gl_FragColor = nameBanner;
  }
  `;

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
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}
