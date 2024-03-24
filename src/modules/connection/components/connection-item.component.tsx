import ImageContainer from '../../../shared/components/image-container/image-container.component';
import { IConnectItem } from '../connection.types';
import * as css from '../connection.styles';

interface IProps extends IConnectItem {}

const ComponentsItem: React.FC<IProps> = ({
  picDescription,
  picPath,
  chartELem: Chart,
  mainContent: Content,
  chartClassName,
}) => {
  return (
    <li className={css.item}>
      <Content />
      <div className={css.imageWrapper}>
        <ImageContainer src={picPath} alt={picDescription} />
        <Chart className={chartClassName} />
      </div>
    </li>
  );
};

export default ComponentsItem;
