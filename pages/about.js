import React, { Component } from 'react';
import Layout from '../components/layout';
import axios from 'axios';

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
      <Layout>
        <h1>{this.props.post.title.rendered}</h1>
        <article
          className="entry-content"
          dangerouslySetInnerHTML={{
            __html: this.props.post.content.rendered
          }} />
      </Layout>
    )
  }
}

