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

const Blog: React.FC = () => {
  const nodeRef = useRef(null);

  const { isLoading, nextPage, posts } = usePosts<IPost>(INITIAL_POSTS);

  const items = useMemo(
    () => posts.map(post => <BlogListItem {...post} key={post.id} />),
    [posts]
  );

  const defaultclassNames = {
    enterActive: css.enterActive,
    enterDone: css.enterDone({
      duration: 200,
    }),
    exitActive: css.exitActive({
      duration: 200,
    }),
    exitDone: css.exitDone,
  };
  return (
    <section className={css.section}>
      <SectionHeader
        subtitle="Our Blog"
        title="Value proposition accelerator product management venture"
      />

      <CSSTransition
        nodeRef={nodeRef}
        in={isLoading}
        timeout={200}
        unmountOnExit={false}
        classNames={defaultclassNames}
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
