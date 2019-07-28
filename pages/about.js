import React, { Component } from 'react';
import Layout from '../components/layout';
import Section1 from '../components/SectionThreeImagesText';
import axios from 'axios';

export default class extends Component {
  // Resolve promise and set initial props.
  static async getInitialProps() {
    const slug = 'about';
    // Make request for posts.
    const response = await axios.get(`http://thebottletreenc.com/wp-json/wp/v2/pages?slug=${slug}`);
    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0],
      acf: response.data[0].acf
    }
  }
  render() {
    return (
      <Layout>
        <section>
          <div className="row">
            <div className="columns">
              <h1 className="section-headlines">{this.props.post.title.rendered}</h1>
            </div>
          </div>
        </section>
        <Section1 content={this.props}/>
      </Layout>
    )
  }
}

