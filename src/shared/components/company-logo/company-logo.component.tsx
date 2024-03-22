import { ReactComponent as Logo } from '../../../assets/icons/boldo-logo.svg';

import * as css from './company-logo.styles';
import { ROUTES } from '../../const/routes.const';

interface IProps {
  path?: string;
}

const CompanyLogo: React.FC<IProps> = ({ path = ROUTES.HOME }) => {
  return (
    <a href={path} className={css.link}>
      <Logo className={css.picture} />
      <span className={css.text}>Boldo</span>
    </a>
  );
};
export default CompanyLogo;
