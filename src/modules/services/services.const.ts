import { IServiceItem } from './services.types';
import item1pic from '../../assets/images/services-item-1.jpg';
import item2pic from '../../assets/images/services-item-2.jpg';
import item3pic from '../../assets/images/services-item-3.jpg';

export const SERVICES_ITEMS_DATA: Array<IServiceItem> = [
  {
    name: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    href: '#item1',
    picDescription: 'First service',
    picPath: item1pic,
  },
  {
    name: 'Even cooler feature',
    description: 'Learning curve network effects return on investment.',
    href: '#item2',
    picDescription: 'First service',
    picPath: item2pic,
  },
  {
    name: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    href: '#item3',
    picDescription: 'First service',
    picPath: item3pic,
  },
];
