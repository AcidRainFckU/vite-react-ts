import { Link } from 'react-router-dom';
import logo from '../img/svg/logo.svg';
import vk from '../img/svg/vk.svg';
import inst from '../img/svg/inst.svg';

import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <footer>
      <div className="footer__body">
        <div className="footer__left">
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
          <div className="footer-info">
            <div className="footer-info__left">
              <ul>
                <li>
                  <span>Company Info</span>
                </li>
                <li>Company Info</li>
                <li>Company Info</li>
                <li>Company Info</li>
              </ul>
            </div>
            <div className="footer-info__right">
              <ul>
                <li>
                  <span> Pages</span>
                </li>
                <li>Services</li>
                <li>Works</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
          <div className="links">
            <Link to="/">
              <img src={vk} />
            </Link>
            <Link to="/">
              <img src={inst} />
            </Link>
          </div>
          <p className="copytight">Copyright © 2021. All rights reserved</p>
        </div>
        <div className="footer__right">
          <h3>
            Have any questions? <span>Write us!</span>{' '}
          </h3>
          <form action="#" className="footer__form">
            <div className="footer__email">
              <div className="footer__email_icon">
                <EmailIcon sx={{ fontSize: 30 }} />
              </div>
              <input type="text" placeholder="Email Adress" />
            </div>
            <input type="submit" className="footer__submit" />
          </form>
        </div>
      </div>
    </footer>
  );
}
