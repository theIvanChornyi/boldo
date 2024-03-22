import * as css from './blog.styles';

import blogItem1 from '../../assets/images/blog-item-1.jpg';
import blogAvatar1 from '../../assets/avatars/chandler-bing.jpg';
import Button from '../../shared/components/button/button.component';

const Blog: React.FC = () => {
  return (
    <section className={css.blog}>
      <header>
        <h2>Value proposition accelerator product management venture</h2>
        <h3>Our Blog</h3>
      </header>

      <ul>
        <li>
          <article>
            <header>
              <img src={blogItem1} loading="lazy" alt="pic1" />
            </header>
            <main>
              <p>
                <span>Category</span>
                <time>November 22, 2021</time>
              </p>
              <p>Pitch termsheet backing validation focus release.</p>
            </main>
            <footer>
              <div>
                <img src={blogAvatar1} loading="lazy" alt="pic1" />
                <p>Chandler Bing</p>
              </div>
            </footer>
          </article>
        </li>
      </ul>
      <Button>Load more</Button>
    </section>
  );
};
export default Blog;
