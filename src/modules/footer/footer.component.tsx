import CompanyLogo from '../../shared/components/company-logo/company-logo.component';
import { ROUTES } from '../../shared/const/routes.const';
import { classBuilder } from '../../shared/utils/class-builder.util';
import * as css from './footer.styles';

const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <div className={css.info}>
        <CompanyLogo className={css.logo} path={ROUTES.HOME} />
        <p className={classBuilder([css.text, css.about])}>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className={classBuilder([css.text, css.rights])}>
          All rights reserved.
        </p>
      </div>
      <nav>
        <ul className={css.navContainer}>
          <li>
            <h3 className={css.navTitle}>Landings</h3>
            <ul className={css.navList}>
              <li className={css.navLink}>
                <a className={css.navLink} href="#4">
                  Home
                </a>
              </li>
              <li className={css.navLink}>
                <a className={css.navLink} href="#4">
                  Products
                </a>
              </li>
              <li className={css.navLink}>
                <a className={css.navLink} href="#4">
                  Services
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={css.navTitle}>Company</h3>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <a className={css.navLink} href="#4">
                  Home
                </a>
              </li>
              <li className={css.navItem}>
                <a className={css.navLink} href="#4">
                  Careers
                </a>
                <span>Hiring!</span>
              </li>
              <li className={css.navItem}>
                <a className={css.navLink} href="#4">
                  Services
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={css.navTitle}>Resources</h3>
            <ul className={css.navList}>
              <li className={css.navLink}>
                <a className={css.navLink} href="#4">
                  Blog
                </a>
              </li>
              <li className={css.navLink}>
                <a className={css.navLink} href="#4">
                  Products
                </a>
              </li>
              <li className={css.navLink}>
                <a className={css.navLink} href="#4">
                  Services
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
