import { IServiceItem } from './services.types';
import item1pic from '../../assets/images/services-item-1.jpg';
import item2pic from '../../assets/images/services-item-2.jpg';
import item3pic from '../../assets/images/services-item-3.jpg';

export const SERVICES_ITEMS_DATA: Array<IServiceItem> = [
  {
    name: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    href: 'https://react.dev/',
    picDescription: 'First service',
    picPath: item1pic,
  },
  {
    name: 'Even cooler feature',
    description: 'Learning curve network effects return on investment.',
    href: 'https://vuejs.org/',
    picDescription: 'First service',
    picPath: item2pic,
  },
  {
    name: 'Cool feature title',
    description: 'Learning curve network effects return on investment.',
    href: 'https://angular.io/',
    picDescription: 'First service',
    picPath: item3pic,
  },
];
