import Head from 'next/head'
import type { AppProps } from 'next/app'

import { Header } from '../components/header/header'
import { Progressbar } from '../components/common/progressbar'

import 'semantic-ui-css/semantic.min.css'
import 'pure-react-carousel/dist/react-carousel.es.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Simple shop | Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Progressbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp