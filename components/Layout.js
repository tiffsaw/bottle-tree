import React from 'react';
// import Router from 'next/router'
import Head from 'next/head';
import Masthead from '../components/Masthead';
// import Link from 'next/link';
// import {
//   Container, Row, Col, Nav, NavItem, Button, Form, NavLink, Collapse,
//   Navbar, NavbarToggler, NavbarBrand, Modal, ModalHeader, ModalBody,
//   ModalFooter, ListGroup, ListGroupItem
// } from 'reactstrap'
// import Signin from './signin'
// import { NextAuth } from 'next-auth/client'
// import Cookies from 'universal-cookie'
// import Package from '../package'
// import Styles from '../css/index.scss'

export default class extends React.Component {

  // static propTypes() {
  //   return {
  //     session: React.PropTypes.object.isRequired,
  //     providers: React.PropTypes.object.isRequired,
  //     children: React.PropTypes.object.isRequired,
  //     fluid: React.PropTypes.boolean,
  //     navmenu: React.PropTypes.boolean,
  //     signinBtn: React.PropTypes.boolean
  //   }
  // }

  render() {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>The Bottle Tree Restaurant</title>
          <meta name="description" content="The Bottle Tree Restaurant." />
        </Head>
        <Masthead />
        <main>
          {this.props.children}
        </main>
      </>
    )
  }
}
