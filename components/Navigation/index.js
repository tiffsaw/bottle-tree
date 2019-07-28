import React from 'react';
import Link from 'next/link';
import style from './style.scss';

const nav = [
  {
    name: 'Menu',
    href: '/menu'
  },
  {
    name: 'Reservations',
    href: '/reservations'
  },
  {
    name: 'Beer and Wine',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact Us',
    href: '/'
  }
];

export default function Nav() {
  return (
    <nav className={style.nav}>
      <div className="row">
        <div className="columns">
          <ul className={style.navList}>
            {nav.map(({ name, href }) => (
              <li key={name} className={style.listItem}>
                <Link href={href}>
                  <a
                    className={style.navLink}
                    role="presentation"
                  >
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
