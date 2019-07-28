import React from 'react';
import Link from 'next/link';
import style from './style.scss';

export default function HomeHero() {
  return (
    <section className={style.hero}>
      <img className={style.image} src="/static/images/killer-bees-burger.png" alt="home hero with burger"/>
      <div className="row">
        <div className="columns">
          <h1>Welcome to the Bottle Tree</h1>
        </div>
      </div>
    </section>
  );
}
