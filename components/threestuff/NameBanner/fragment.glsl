uniform sampler2D bannerTexture;

void main() {
  vec2 uv = gl_FragCoord.xy / vec2(1048,168);
  vec4 nameBanner = texture2D( bannerTexture, uv );
  gl_FragColor = nameBanner;
  gl_FragColor.a = nameBanner.r;

  // Compute a color that varies with uv.x, uv.y and iTime.
  //vec3 col = 0.5 + 0.5 * cos( uv.xyx + vec3(0, 2, 4));

  // Output the colour for this pixel.
  //gl_FragColor = vec4(col, 1.0);

  //gl_FragColor = vec4(0.5,0.5,0.5,1);
  
}