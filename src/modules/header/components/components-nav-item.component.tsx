import { ROUTES } from '../../../shared/const/routes.const';
import * as css from '../header.styles';

interface IProps {
  path: keyof typeof ROUTES;
  title: string;
}

const NavItem: React.FC<IProps> = ({ path, title }) => {
  return (
    <li>
      <a href={`#${ROUTES[path]}`} className={css.navigationLink}>
        {title}
      </a>
    </li>
  );
};

export default NavItem;
