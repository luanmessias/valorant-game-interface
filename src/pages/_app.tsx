import { AppProps } from 'next/dist/next-server/lib/router/router';
import GlobalNormalize from '../styles/global/normalize';
import GlobalFonts from '../styles/global/fonts';
import GlobalStyles from '../styles/global/global';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalNormalize />
      <GlobalFonts />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
