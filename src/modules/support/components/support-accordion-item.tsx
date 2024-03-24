import { useId } from 'react';

import * as css from '../support.styles';

interface IProps {
  title: string;
}

const AccordionItem: React.FC<IProps> = ({ title }) => {
  const id = useId();

  return (
    <li>
      <input type="checkbox" id={id} className={css.accordionInput} />
      <label htmlFor={id} className={css.accordionLabel}>
        {title}
        <div className={css.accordionLabelBullet} />
      </label>
      <div className={css.accordionContent}>
        <p className={css.accordionDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          earum, magnam? Alias error, placeat! Accusamus accusantium alias eum
          iure laborum odit porro quaerat? Animi enim id labore officiis quam
          sint.
        </p>
      </div>
    </li>
  );
};

export default AccordionItem;
