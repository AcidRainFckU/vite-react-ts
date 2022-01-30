import { Link } from 'react-router-dom';
import logo from '../img/svg/logo.svg';

export default function Header() {
  return (
    <header className="w-screen flex justify-center align-middle">
      <nav className="w-screen flex justify-center align-middle">
        <div className="nav__body flex relative w-full">
          <div className="logo absolute">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="nav-menu flex justify-between justify-self-center w-full">
            <Link className="nav-menu__link" to="eng">
              English
            </Link>
            <Link className="nav-menu__link" to="services">
              Services
            </Link>
            <Link className="nav-menu__link" to="works">
              Works
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
