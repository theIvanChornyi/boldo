import { ReactComponent as Logo } from '../../../assets/icons/boldo-logo.svg';

import * as css from './company-logo.styles';
import { ROUTES } from '../../const/routes.const';
import { classBuilder } from '../../utils/class-builder.util';

interface IProps {
  path?: string;
  className?: string;
}

const CompanyLogo: React.FC<IProps> = ({ path = ROUTES.HOME, className }) => {
  return (
    <a href={path} className={classBuilder([css.link, className])}>
      <Logo className={css.picture} />
      <span className={css.text}>Boldo</span>
    </a>
  );
};
export default CompanyLogo;
