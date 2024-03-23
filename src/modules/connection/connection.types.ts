type TIcon = React.FunctionComponent<Partial<{ className: string }>>;

export interface IConnectItem {
  picPath: string;
  picDescription: string;
  chartELem: TIcon;
  mainContent: React.FunctionComponent;
  chartClassName?: string;
}

export interface ITab {
  ico: TIcon;
  title: string;
}
