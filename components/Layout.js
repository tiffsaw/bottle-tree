import React from 'react';
import Head from 'next/head';
import Masthead from '../components/Masthead';
import Mastfoot from '../components/Mastfoot';

export default class extends React.Component {
  render() {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>The Bottle Tree Restaurant</title>
          <meta name="description" content="The Bottle Tree Restaurant." />
        </Head>
        <Masthead />
        <main>
          {this.props.children}
        </main>
        <Mastfoot />
      </>
    )
  }
}
