export interface IFoterNavListItems {
  name: string;
  path: string;
  note?: string;
}

export interface IFoterNavList {
  title: string;
  items: Array<IFoterNavListItems>;
}
