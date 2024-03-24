import logo from '../../../assets/icons/boldo.svg';
import * as css from './error.styles';

const ErrorElem: React.FC = () => {
  return (
    <div className={css.box}>
      <img className={css.logo} src={logo} alt="company logo" />
    </div>
  );
};

export default ErrorElem;
