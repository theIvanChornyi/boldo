import { classBuilder } from '../../utils/class-builder.util';
import * as css from './image-container.styles';

interface IProps<T extends React.ElementType> {
  component?: T;
  src: string;
  alt?: string;
  className?: string;
  loadingType?: React.ImgHTMLAttributes<HTMLImageElement>['loading'];
}

const ImageContainer: React.FC<IProps<React.ElementType>> = ({
  component: ContainerComponent = 'div',
  src,
  alt,
  loadingType,
  className,
}) => {
  return (
    <ContainerComponent className={classBuilder([css.container, className])}>
      <img className={css.image} src={src} alt={alt} loading={loadingType} />
    </ContainerComponent>
  );
};

export default ImageContainer;
