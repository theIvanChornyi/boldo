import { ReactComponent as Logo } from '../../assets/icons/boldo-logo.svg';
import * as css from './footer.styles';

const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <div>
        <a href="#4">
          <Logo />
          <span>Boldo</span>
        </a>
        <p>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p>All rights reserved.</p>
      </div>
      <nav>
        <ul>
          <li>
            <h3>Landings</h3>
            <ul>
              <li>
                <a href="#4">Home</a>
              </li>
              <li>
                <a href="#4">Products</a>
              </li>
              <li>
                <a href="#4">Services</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#4">Home</a>
              </li>
              <li>
                <a href="#4">Careers</a>
              </li>
              <li>
                <a href="#4">Services</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#4">Blog</a>
              </li>
              <li>
                <a href="#4">Products</a>
              </li>
              <li>
                <a href="#4">Services</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
