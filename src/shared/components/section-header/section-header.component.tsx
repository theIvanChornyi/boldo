import * as css from './section-header.styles';

interface IProps {
  title?: string;
  subtitle?: string;
}

const SectionHeader: React.FC<IProps> = ({ title, subtitle }) => {
  return (
    <header className={css.header}>
      <h2 className={css.title}>{title}</h2>
      <h3 className={css.subTitle}>{subtitle}</h3>
    </header>
  );
};

export default SectionHeader;
