import Link from 'next/link';
import React, { Component } from 'react';
import axios from 'axios';
import Layout from '../components/layout';

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {

    // Make request for posts.
    const response = await axios.get('http://thebottletreenc.com/wp-json/wp/v2/posts')

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    return (
      <Layout>
        <h1>Our Posts Page!</h1>
        <ul>
          {
            this.props.posts.map(post => {
              return (
                <li key={post.id}>
                  <Link href={`/posts/${post.slug}`}>
                    <a href={`/posts/${post.slug}`}>
                      {post.title.rendered}
                    </a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </Layout>
    )
  }
}
