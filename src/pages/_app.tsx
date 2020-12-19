import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import MainNav from '../molecules/MainNav'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import FriendsList from '@/organisms/FriendsList'
import { ModalProvider } from '@/context/Modal'
import Modal from '@/molecules/Modal'
import { BGVideoProvider } from '@/context/BackgroundVideo'
import { AnimatePresence } from 'framer-motion'
import '../styles/global/nprogress.css'
import GlobalNormalize from '../styles/global/normalize'
import GlobalStyles, { Main, BGImage, Wrapper } from '../styles/global/global'

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
