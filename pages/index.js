import Head from 'next/head'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Glenn Gijsberts | Front-end developer"
        openGraph={{
          title: 'Glenn Gijsberts | Front-end developer',
          site_name: 'Glenn Gijsberts Portfolio',
        }}
      />

      <h1>Hello world</h1>
    </>
  )
}
