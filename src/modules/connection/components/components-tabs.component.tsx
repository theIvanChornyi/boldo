import { useState } from 'react';
import SectionTitle from '../../../shared/components/section-title/section-title.component';
import { classBuilder } from '../../../shared/utils/class-builder.util';
import { INITIAL_TAB, TABS } from '../connection.const';
import * as css from '../connection.styles';

interface IProps {}

const ComponentsTabs: React.FC<IProps> = () => {
  const [active, setActive] = useState<string>(INITIAL_TAB);

  const setActiveTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.dataset.title ?? INITIAL_TAB);
  };

  const items = TABS.map(({ ico: Icon, title }) => (
    <li key={title}>
      <button
        className={css.tabItem(active === title)}
        data-title={title}
        onClick={setActiveTab}
      >
        <Icon className={css.tabIcon(active === title)} /> {title}
      </button>
    </li>
  ));

  return (
    <div className={classBuilder([css.content, css.tabsContainer])}>
      <SectionTitle>
        We connect our customers with the best, and help them keep up-and stay
        open.
      </SectionTitle>

      <ul className={css.tabsList}>{items}</ul>
    </div>
  );
};

export default ComponentsTabs;
