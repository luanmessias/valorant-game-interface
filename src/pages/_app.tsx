import { AppProps } from 'next/dist/next-server/lib/router/router';
import { AnimatePresence } from 'framer-motion';
import GlobalNormalize from '../styles/global/normalize';
import GlobalFonts from '../styles/global/fonts';
import GlobalStyles, { Main } from '../styles/global/global';
import MainNav from '../molecules/MainNav';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  return (
    <AnimatePresence>
      <GlobalNormalize />
      <GlobalFonts />
      <GlobalStyles />
      <Main
        key={router.route}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <MainNav />

        <Component {...pageProps} />
      </Main>
    </AnimatePresence>
  );
}
