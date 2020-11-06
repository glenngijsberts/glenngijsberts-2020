import NProgress from '~/components/NProgress'
import GlobalStyles from '~/components/GlobalStyles'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <GlobalStyles />
      <NProgress />
      <Component {...pageProps} />
    </>
  )
}

export default App
