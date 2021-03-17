import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import MainNav from '@/molecules/MainNav'
import { ThemeProvider } from 'styled-components'
import theme from '@/globalStyles/theme'
import FriendsList from '@/organisms/FriendsList'
import { ModalProvider } from '@/context/Modal'
import Modal from '@/molecules/Modal'
import { BGVideoProvider } from '@/context/BackgroundVideo'
import { AnimatePresence } from 'framer-motion'
import GlobalNormalize from '@/globalStyles/global/normalize'
import Head from 'next/head'
import GlobalStyles, {
  Main,
  BGImage,
  Wrapper
} from '@/globalStyles/global/global'
import '@/globalStyles/global/nprogress.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routechangeError', () => NProgress.done())

export default function MyApp({
  Component,
  pageProps,
  router
}: AppProps): JSX.Element {
  const duration = 0.35
  const delay = 0

  const variants = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        when: 'beforeChildren'
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: duration }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Valorant Game Interface</title>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
          rel="stylesheet"
        />
      </Head>
      <ModalProvider>
        <BGVideoProvider>
          <Modal />
          <Main>
            <MainNav />

            <AnimatePresence exitBeforeEnter>
              <Wrapper
                key={router.route}
                variants={variants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Component {...pageProps} key={router.route} />
              </Wrapper>
            </AnimatePresence>

            <FriendsList />

            <GlobalNormalize />
            <GlobalStyles />
          </Main>
          <BGImage data-route={router.route} />
        </BGVideoProvider>
      </ModalProvider>
    </ThemeProvider>
  )
}
