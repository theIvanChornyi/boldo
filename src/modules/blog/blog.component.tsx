import { useMemo, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import Button from '../../shared/components/button/button.component';
import SectionHeader from '../../shared/components/section-header/section-header.component';
import BlogListItem from './components/blog-list-item.component';
import Loader from '../../shared/components/loader/loader.component';

import { SIZE, VARIANT } from '../../shared/components/button/button.types';
import { IPost } from './blog.types';
import { INITIAL_POSTS } from './blog.const';

import * as css from './blog.styles';
import { usePosts } from './usePosts.hook';
import { ROUTES } from '../../shared/const/routes.const';

const Blog: React.FC = () => {
  const nodeRef = useRef(null);

  const { isLoading, nextPage, posts } = usePosts<IPost>(INITIAL_POSTS);

  const items = useMemo(
    () => posts.map(post => <BlogListItem {...post} key={post.id} />),
    [posts]
  );

  return (
    <section className={css.section} id={ROUTES.ABOUT}>
      <SectionHeader
        subtitle="Our Blog"
        title="Value proposition accelerator product management venture"
      />

      <CSSTransition
        nodeRef={nodeRef}
        in={isLoading}
        timeout={200}
        unmountOnExit={false}
        classNames={css.defaultclassNames}
      >
        <ul className={css.list} ref={nodeRef}>
          {items}
        </ul>
      </CSSTransition>

      <div className={css.buttonWrapper}>
        {isLoading && <Loader />}
        <Button
          variant={isLoading ? VARIANT.DISABLED : VARIANT.TRANSPARENT}
          size={SIZE.LARGE}
          disabled={isLoading}
          onClick={nextPage}
        >
          Load more
        </Button>
      </div>
    </section>
  );
};
export default Blog;
