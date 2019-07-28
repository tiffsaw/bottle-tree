import React from 'react';
import Link from 'next/link';
import style from './style.scss';

const nav = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Team',
    href: ''
  },
  {
    name: 'Reservations',
    href: '/reservations'
  },
  {
    name: 'Food',
    href: '/menu'
  },
  {
    name: 'Drinks',
    href: ''
  },
  {
    name: 'Contact Us',
    href: '/'
  }
];

export default function Nav() {
  return (
    <div className="row">
      <div className="small-12 columns">
        <nav className={style.nav}>
          <ul className={style.navList}>
            {nav.map(({ name, href }) => (
              <li key={name} className={style.listItem}>
                <Link href={href}>
                  <a
                    className={style.navLink}
                    role="nav"
                  >
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
