import { ROUTES } from '../../shared/const/routes.const';
import { IFoterNavList } from './footer.types';

export const NAV_LIST_LANDINGS: IFoterNavList = {
  title: 'Landings',
  items: [
    {
      name: 'Home',
      path: `#${ROUTES.HERO}`,
    },
    {
      name: 'Products',
      path: `#${ROUTES.PRODUCT}`,
    },
    {
      name: 'Services',
      path: `#${ROUTES.SERVICES}`,
    },
  ],
};

export const NAV_LIST_COMPANY: IFoterNavList = {
  title: 'Company',
  items: [
    {
      name: 'Home',
      path: `#${ROUTES.HERO}`,
    },
    {
      name: 'Careers',
      path: `#${ROUTES.SUBSCRIBE}`,
      note: 'Hiring!',
    },
    {
      name: 'Services',
      path: `#${ROUTES.SERVICES}`,
    },
  ],
};

export const NAV_LIST_RESOURCES: IFoterNavList = {
  title: 'Resources',
  items: [
    {
      name: 'Blog',
      path: `#${ROUTES.ABOUT}`,
    },
    {
      name: 'Products',
      path: `#${ROUTES.PRODUCT}`,
    },
    {
      name: 'Services',
      path: `#${ROUTES.SERVICES}`,
    },
  ],
};
