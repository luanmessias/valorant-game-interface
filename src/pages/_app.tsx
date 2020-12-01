import React, { useState } from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalNormalize from '../styles/global/normalize'
import GlobalStyles, { Main } from '../styles/global/global'
import MainNav from '../molecules/MainNav'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import FriendsList from '@/organisms/FriendsList'
import Modal from '@/molecules/Modal'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [showModal, setShowModal] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>

      <Main>
        <MainNav showModal={showModal} setShowModal={setShowModal} />

        <Component {...pageProps} />

        <FriendsList />

        <GlobalNormalize />
        <GlobalStyles />
      </Main>
    </ThemeProvider>
  )
}
