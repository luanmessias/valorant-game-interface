import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import GlobalNormalize from '../styles/global/normalize'
import GlobalStyles, { Main } from '../styles/global/global'
import MainNav from '../molecules/MainNav'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <MainNav />

        <Component {...pageProps} />

        <GlobalNormalize />
        <GlobalStyles />
      </Main>
    </ThemeProvider>
  )
}
