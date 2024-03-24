import Button from '../../shared/components/button/button.component';
import CompanyLogo from '../../shared/components/company-logo/company-logo.component';
import NavItem from './components/header-nav-item.component';

import { SIZE, VARIANT } from '../../shared/components/button/button.types';
import { ROUTES } from '../../shared/const/routes.const';
import * as css from './header.styles';

const Header: React.FC = () => {
  return (
    <header className={css.header}>
      <CompanyLogo path={ROUTES.HOME} />
      <nav className={css.navigation}>
        <ul className={css.navigationLinksList}>
          <NavItem title="Product" path="PRODUCT" />
          <NavItem title="Services" path="SERVICES" />
          <NavItem title="About" path="ABOUT" />
        </ul>
        <Button variant={VARIANT.LIGHT} size={SIZE.MEDIUM}>
          Log In
        </Button>
      </nav>
    </header>
  );
};

export default Header;
