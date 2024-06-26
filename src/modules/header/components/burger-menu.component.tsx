import { toast } from 'react-toastify';

import Button from '../../../shared/components/button/button.component';
import { SIZE, VARIANT } from '../../../shared/components/button/button.types';
import * as css from '../header.styles';
import NavItem from './header-nav-item.component';

interface IProps {
  isOpen: boolean;
}

const Burger: React.FC<IProps> = ({ isOpen }) => {
  const signIn = (): void => {
    toast.success('Successfully signed in');
  };
  return (
    <nav className={css.burgerNavigation(isOpen)}>
      <ul className={css.navigationLinksList}>
        <NavItem title="Product" path="PRODUCT" />
        <NavItem title="Services" path="SERVICES" />
        <NavItem title="About" path="ABOUT" />
      </ul>

      <Button variant={VARIANT.LIGHT} size={SIZE.MEDIUM} onClick={signIn}>
        Log In
      </Button>
    </nav>
  );
};

export default Burger;
