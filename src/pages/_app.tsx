import { AppProps } from 'next/dist/next-server/lib/router/router';
import GlobalStyle from '../styles/GlobalStyle';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
