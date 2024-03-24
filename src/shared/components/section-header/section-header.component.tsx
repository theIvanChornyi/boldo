import { classBuilder } from '../../utils/class-builder.util';
import * as css from './section-header.styles';

interface IProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<IProps> = ({ title, subtitle, className }) => {
  return (
    <header className={classBuilder([css.header, className])}>
      {title && <h2 className={css.title}>{title}</h2>}
      {subtitle && <h3 className={css.subTitle}>{subtitle}</h3>}
    </header>
  );
};

export default SectionHeader;
