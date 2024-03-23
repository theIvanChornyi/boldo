import { classBuilder } from '../../utils/class-builder.util';
import * as css from './section-title.styles';

interface IProps {
  children: string;
  className?: string;
}

const SectionTitle: React.FC<IProps> = ({ children, className }) => {
  return <h2 className={classBuilder([css.title, className])}>{children}</h2>;
};

export default SectionTitle;
