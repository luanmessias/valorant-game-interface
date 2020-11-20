import { AppProps } from 'next/dist/next-server/lib/router/router';
import GlobalNormalize from '../styles/global/normalize';
import GlobalFonts from '../styles/global/fonts';
import GlobalStyles, { Main } from '../styles/global/global';
import MainNav from '../molecules/MainNav';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalNormalize />
      <GlobalFonts />
      <GlobalStyles />
      <Main>
        <MainNav />
        <Component {...pageProps} />
      </Main>
    </>
  );
}
