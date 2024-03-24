import ImageContainer from '../../../shared/components/image-container/image-container.component';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import { IServiceItem } from '../services.types';
import * as css from '../services.styles';

interface IProps extends IServiceItem {}

const ServiceItem: React.FC<IProps> = ({
  picPath,
  picDescription,
  name,
  description,
  href,
}) => {
  return (
    <li className={css.servicesItem}>
      <ImageContainer src={picPath} loadingType="lazy" alt={picDescription} />
      <span className={css.itemName}>{name}</span>
      <p className={css.itemDescription}>{description}</p>
      <a
        className={css.itemLink}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore page {<Arrow />}
      </a>
    </li>
  );
};

export default ServiceItem;
