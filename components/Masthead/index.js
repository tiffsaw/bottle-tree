import style from './style.scss';
import Navigation from '../../components/Navigation';

export default function Masthead() {
  return (
    <header className={style.header}>
      <a href="/">
        <h1 className={style.headline}>The Bottle Tree</h1>
      </a>
      <Navigation />
    </header>
  );
}
