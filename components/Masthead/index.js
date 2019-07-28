import Link from 'next/link';
import style from './style.scss';
import Navigation from '../../components/Navigation';

export default function Masthead() {
  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <div className="row">
          <div className="columns">
            <div className={style.wrapper}>
              <Link href="/">
                <a className={style.logoWrapper}>
                  <img className={style.logo} src="/static/images/logo.png" alt="The Bottle Tree Logo"/>
                </a>
              </Link>
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
