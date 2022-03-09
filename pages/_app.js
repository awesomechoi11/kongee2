import { RecoilRoot } from 'recoil';
import ThreeStuff from '../components/threestuff';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      {/* <ThreeStuff /> */}
    </RecoilRoot>
  );
}

export default MyApp;
