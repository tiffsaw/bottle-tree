import Link from 'next/link';
import styles from './style.scss';

export default () => (
  <div className={styles.root}>
    <div className="row">
      <div className="small-12 columns">
        <ul>
          <li><Link href="/"><a href="/">Home</a></Link></li>
          <li><Link href="/menu"><a href="/menu">Menu</a></Link></li>
          <li><Link href="/about"><a href="/about">About</a></Link></li>
          <li><Link href="/reservations"><a href="/reservations">Reservations</a></Link></li>
        </ul>
      </div>
    </div>
  </div>
)
