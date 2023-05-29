import '../styles/globals.scss';
import React from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component);
  return <Component {...pageProps} />;
}

export default MyApp;
