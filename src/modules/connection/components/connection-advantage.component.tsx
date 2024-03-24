import Button from '../../../shared/components/button/button.component';
import ListBullet from '../../../shared/components/list-bullet/list-bullet.component';
import SectionTitle from '../../../shared/components/section-title/section-title.component';
import { classBuilder } from '../../../shared/utils/class-builder.util';
import { ADVENATGES } from '../connection.const';
import { VARIANT, SIZE } from '../../../shared/components/button/button.types';

import * as css from '../connection.styles';

interface IProps {}

const ComponentsAdvantage: React.FC<IProps> = () => {
  const items = ADVENATGES.map(advantage => (
    <li className={css.advantageItem} key={advantage}>
      <ListBullet /> {advantage}
    </li>
  ));

  return (
    <div className={classBuilder([css.content, css.advantageContainer])}>
      <SectionTitle>
        We connect our customers with the best, and help them keep up-and stay
        open.
      </SectionTitle>

      <ul className={css.advantageList}>{items}</ul>

      <Button
        variant={VARIANT.DARK}
        size={SIZE.LARGE}
        className={css.advantageButton}
      >
        Start now
      </Button>
    </div>
  );
};

export default ComponentsAdvantage;
