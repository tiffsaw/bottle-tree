import Head from 'next/head'
import Navigation from '../components/Navigation'
import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {

    const slug = 'about';

    // Make request for posts.
    const response = await axios.get(`http://thebottletreenc.com/wp-json/wp/v2/pages?slug=${slug}`)

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>{this.props.post.title.rendered}</title>
          <meta name="description" content={`This is a single post for ${this.props.post.title.rendered}`} />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navigation />
        <h1>{this.props.post.title.rendered}</h1>
        <article
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: this.props.post.content.rendered
          }} />
      </Fragment>
    )
  }
}
