import style from './style.scss';
import Icon from '../../components/Icon';
import Link from 'next/link';

export default function Masthead() {
  return (
    <footer className={style.footer}>
      <div className="row">
        <div className="small-12 columns">
          <div className={style.footerWrap}>
            <span className={style.block}>
              <h3 className={style.headline}>
                Location
              </h3>
              <p>1234 Belmont St, Belmont 28208</p>
            </span>
            <span className={style.block}>
              <h3 className={style.headline}>
                Hours
              </h3>
              <p>Monday – Saturday | 6am – 8pm<br/>Sunday | 7am – 7pm</p>
            </span>
            <span className={style.block}>
              <h3 className={style.headline}>
                Contact
              </h3>
              <p>888-888-8888<br/> thebottletree@test.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className={style.footerBanner}>
        <div className="row">
          <div className="small-12 columns">
            <span className={style.topWrapper}>
              <Link href="/">
                <a className={style.logoLink}>
                  <img className={style.logo} src="/static/images/logo.png" alt="The Bottle Tree Logo" />
                </a>
              </Link>
              <h2 className={style.bannerText}>The Bottle Tree - Coming soon in your Belmont neighborhood</h2>
              <ul className={style.socialList}>
                <li>
                  <a href="" target="_blank">
                    <Icon className={style.socialIcons} icon="instagram" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <Icon className={style.socialIcons} icon="facebook" />
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
