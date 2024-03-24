import { IFoterNavList } from '../footer.types';
import * as css from '../footer.styles';

interface IProps extends IFoterNavList {
  children?:
    | React.JSX.Element
    | Array<React.JSX.Element>
    | string
    | Array<string | React.JSX.Element>;
}
const FooterNavList: React.FC<Partial<IProps>> = ({ title, children }) => {
  return (
    <li>
      <h3 className={css.navTitle}>{title}</h3>
      <ul className={css.navList}>{children}</ul>
    </li>
  );
};

export default FooterNavList;
