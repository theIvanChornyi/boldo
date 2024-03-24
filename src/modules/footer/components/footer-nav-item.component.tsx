import { IFoterNavListItems } from '../footer.types';
import * as css from '../footer.styles';

interface IProps extends IFoterNavListItems {}

const FooterNavItem: React.FC<IProps> = ({ name, path, note }) => {
  return (
    <li className={css.navItem}>
      <a className={css.navLink} href={path}>
        {name}
      </a>
      {note && <span>{note}</span>}
    </li>
  );
};

export default FooterNavItem;
