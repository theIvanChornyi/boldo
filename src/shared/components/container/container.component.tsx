import React from 'react';
import * as css from './conteiner.styles';

interface IProps<T extends React.ElementType> {
  children?:
    | React.JSX.Element
    | Array<React.JSX.Element>
    | string
    | Array<string | React.JSX.Element>;
  component?: T;
}

const OverviewCard: React.FC<IProps<React.ElementType>> = ({
  children,
  component: ContainerComponent = 'div',
}) => {
  return (
    <ContainerComponent className={css.container}>
      {children}
    </ContainerComponent>
  );
};

export default OverviewCard;
