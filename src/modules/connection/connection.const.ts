import ComponentsAdvantage from './components/connection-advantage.component';
import ComponentsTabs from './components/connection-tabs.component';
import { IConnectItem, ITab } from './connection.types';
import { chartLeft, chartRight } from './connection.styles';
import item1pic from '../../assets/images/connect-item-1.jpg';
import item2pic from '../../assets/images/connect-item-2.jpg';
import { ReactComponent as Chart1 } from '../../assets/images/connect-chart-1.svg';
import { ReactComponent as Chart2 } from '../../assets/images/connect-chart-2.svg';

import { ReactComponent as Feather } from '../../assets/icons/feather.svg';
import { ReactComponent as Eye } from '../../assets/icons/eye.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';

export const CONNECT_ITEMS_DATA: Array<IConnectItem> = [
  {
    picDescription: 'Man talks',
    picPath: item1pic,
    chartELem: Chart1,
    mainContent: ComponentsAdvantage,
    chartClassName: chartLeft,
  },
  {
    picDescription: 'Women talks',
    picPath: item2pic,
    chartELem: Chart2,
    mainContent: ComponentsTabs,
    chartClassName: chartRight,
  },
];

export const ADVENATGES: Array<string> = [
  'We connect our customers with the best.',
  'Advisor success customer launch party.',
  'Business-to-consumer long tail.',
];

export const TABS: Array<ITab> = [
  { ico: Feather, title: 'We connect our customers with the best.' },
  { ico: Eye, title: 'Advisor success customer launch party.' },
  { ico: Sun, title: 'Business-to-consumer long tail.' },
];

export const INITIAL_TAB = TABS?.[0].title;
