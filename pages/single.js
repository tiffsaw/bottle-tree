import Layout from '../components/layout';
import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps(context) {

    const slug = context.query.slug

    // Make request for posts.
    const response = await axios.get(`http://thebottletreenc.com/wp-json/wp/v2/posts?slug=${slug}`)

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
