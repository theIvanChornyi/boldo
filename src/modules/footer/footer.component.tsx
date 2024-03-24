import CompanyLogo from '../../shared/components/company-logo/company-logo.component';
import { ROUTES } from '../../shared/const/routes.const';
import { classBuilder } from '../../shared/utils/class-builder.util';
import FooterNavItem from './components/footer-nav-item.component';
import FooterNavList from './components/footer-nav-list.component';
import {
  NAV_LIST_LANDINGS,
  NAV_LIST_COMPANY,
  NAV_LIST_RESOURCES,
} from './footer.const';
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
          <FooterNavList title={NAV_LIST_LANDINGS.title}>
            {NAV_LIST_LANDINGS.items.map(item => (
              <FooterNavItem {...item} key={item.name} />
            ))}
          </FooterNavList>
          <FooterNavList title={NAV_LIST_COMPANY.title}>
            {NAV_LIST_COMPANY.items.map(item => (
              <FooterNavItem {...item} key={item.name} />
            ))}
          </FooterNavList>
          <FooterNavList title={NAV_LIST_RESOURCES.title}>
            {NAV_LIST_RESOURCES.items.map(item => (
              <FooterNavItem {...item} key={item.name} />
            ))}
          </FooterNavList>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
