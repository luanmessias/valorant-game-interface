import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalNormalize from '../styles/global/normalize'
import GlobalStyles, { Main, BGImage } from '../styles/global/global'
import MainNav from '../molecules/MainNav'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import FriendsList from '@/organisms/FriendsList'
import { ModalProvider } from '@/context/Modal'
import Modal from '@/molecules/Modal'
import { useRouter } from 'next/router'
import { BGVideoProvider } from '@/context/BackgroundVideo'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const currentRoute = useRouter().pathname

  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <BGVideoProvider>
          <Modal />
          <Main>
            <MainNav />

            <Component {...pageProps} />

            <FriendsList />

            <GlobalNormalize />
            <GlobalStyles />
          </Main>
          <BGImage data-route={currentRoute} />
        </BGVideoProvider>
      </ThemeProvider>
    </ModalProvider>
  )
}
