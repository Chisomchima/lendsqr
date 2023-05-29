import '../styles/globals.scss'
import { AppProps } from 'next/app'
import { ComponentType } from 'react'

function MyApp({ Component, pageProps }: AppProps<ComponentType>) {
  return <Component {...pageProps} />;
}

export default MyApp