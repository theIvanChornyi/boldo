import { classBuilder } from '../../utils/class-builder.util';
import * as css from './button.styles';
import { SIZE, VARIANT } from './button.types';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  className?: string;
  variant?: VARIANT;
  size?: SIZE;
}

const Button: React.FC<IProps> = ({
  children,
  className,
  variant = VARIANT.DEFAULT,
  size = SIZE.MEDIUM,
  type = 'button',
  ...other
}) => {
  return (
    <button
      className={classBuilder([css.button(variant, size), className])}
      type={type}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
