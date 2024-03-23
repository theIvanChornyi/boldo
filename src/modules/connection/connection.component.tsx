import * as css from './connection.styles';
import ComponentsItem from './components/components-item.component';
import { CONNECT_ITEMS_DATA } from './connection.const';

const Connection: React.FC = () => {
  const items = CONNECT_ITEMS_DATA.map((item, i) => (
    <ComponentsItem key={i} {...item} />
  ));
  return (
    <section className={css.section}>
      <ul className={css.list}>{items}</ul>
    </section>
  );
};

export default Connection;
