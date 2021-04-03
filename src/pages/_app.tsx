import '../styles/globals.css'
import { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'

type MyAppProps = {
  Component: NextComponentType<NextPageContext, any, {}>
  pageProps: any
  router: any
} & AppProps

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  return <Component {...pageProps } />
}

export default MyApp
