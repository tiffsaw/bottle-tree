import Head from 'next/head'
import Navigation from '../components/Navigation'
import { Fragment } from 'react'

export default () => (
  <Fragment>
    <Navigation />
    <Head>
      <title>The Bottle Tree Restaurant</title>
      <meta name="description" content="The Bottle Tree Restaurant." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>The Bottle Tree Restaurant</h1>
  </Fragment>
)
