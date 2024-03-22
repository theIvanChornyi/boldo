import Blog from './blog/blog.component';
import Hero from './hero/hero.component';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Blog />
    </>
  );
};

export default Home;
