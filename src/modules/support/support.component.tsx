import SectionTitle from '../../shared/components/section-title/section-title.component';
import AccordionItem from './components/support-accordion-item';
import { ACCORDION_CONFIG } from './support.const';
import * as css from './support.styles';

const Support: React.FC = () => {
  const items = ACCORDION_CONFIG.map(title => (
    <AccordionItem title={title} key={title} />
  ));

  return (
    <section className={css.section}>
      <SectionTitle className={css.title}>
        We connect our customers with the best, and help them keep up-and stay
        open.
      </SectionTitle>
      <ul className={css.accordion}>{items}</ul>
    </section>
  );
};
export default Support;
