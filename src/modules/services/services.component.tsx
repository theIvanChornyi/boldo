import SectionHeader from '../../shared/components/section-header/section-header.component';
import ServiceItem from './components/service-item.component';
import { SERVICES_ITEMS_DATA } from './services.const';
import * as css from './services.styles';

const Services: React.FC = () => {
  const items = SERVICES_ITEMS_DATA.map(item => (
    <ServiceItem key={item.href} {...item} />
  ));

  return (
    <section className={css.section}>
      <SectionHeader
        title="Handshake infographic mass market crowdfunding iteration."
        subtitle="Our Services"
      />
      <ul className={css.servicesList}>{items}</ul>
    </section>
  );
};

export default Services;
