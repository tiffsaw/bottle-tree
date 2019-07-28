import React from 'react';
import style from './style.scss';

export default function HomeHero() {
  return (
    <section className={style.hero}>
      <div className="row">
        <div className="small-12 columns">
          <div className={style.heroWrapper}>
            <img className={style.image} src="/static/images/home-hero-lights-placeholder.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
