import { classBuilder } from '../../utils/class-builder.util';
import * as css from './section.styles';

interface IProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?:
    | React.JSX.Element
    | Array<React.JSX.Element>
    | string
    | Array<string | React.JSX.Element>;
  id?: string;
  className?: string;
}

const Section: React.FC<IProps> = ({ children, className, id, ...other }) => {
  return (
    <section
      id={id}
      className={classBuilder([css.section, className])}
      {...other}
    >
      {children}
    </section>
  );
};

export default Section;
