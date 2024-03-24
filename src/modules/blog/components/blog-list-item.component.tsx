import moment from 'moment';
import { IPost } from '../blog.types';
import * as css from '../blog.styles';
import ImageContainer from '../../../shared/components/image-container/image-container.component';

interface IProps extends IPost {}

const BlogListItem: React.FC<IProps> = ({
  avatar,
  createdAt,
  title,
  name,
  picture,
  text,
}) => {
  return (
    <li>
      <article className={css.item}>
        <ImageContainer
          width={300}
          height={225}
          component="header"
          src={picture}
          alt={title}
          className={css.picture}
        />
        <main className={css.content}>
          <p className={css.userInfo}>
            <span className={css.itemTitle}>{title}</span>
            <time className={css.itemData} dateTime={createdAt}>
              {moment(createdAt).format('MMMM DD, YYYY')}
            </time>
          </p>
          <p className={css.itemText}>{`${text.slice(0, 140)}${
            text.length > 100 && '...'
          }`}</p>
        </main>
        <footer className={css.footer}>
          <ImageContainer
            src={avatar}
            loadingType="lazy"
            alt={`${name} avatar`}
            className={css.avatar}
          />
          <p>{name}</p>
        </footer>
      </article>
    </li>
  );
};

export default BlogListItem;
