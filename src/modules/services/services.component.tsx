import * as css from './services.styles';
import item1pic from '../../assets/images/services-item-1.jpg';

const Services: React.FC = () => {
  return (
    <section className={css.section}>
      <header>
        <h2>Handshake infographic mass market crowdfunding iteration.</h2>
        <h3>Our Services</h3>
      </header>

      <ul>
        <li>
          <div>
            <img src={item1pic} loading="lazy" alt="pic1" />
          </div>
          <span>Cool feature title</span>
          <p>Learning curve network effects return on investment.</p>
          <a href="#3">Explore page</a>
        </li>
        <li>
          <div>
            <img src={item1pic} loading="lazy" alt="pic1" />
          </div>
          <span>Cool feature title</span>
          <p>Learning curve network effects return on investment.</p>
          <a href="#3">Explore page</a>
        </li>
        <li>
          <div>
            <img src={item1pic} loading="lazy" alt="pic1" />
          </div>
          <span>Cool feature title</span>
          <p>Learning curve network effects return on investment.</p>
          <a href="#3">Explore page</a>
        </li>
      </ul>
    </section>
  );
};

export default Services;
