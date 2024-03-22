import Button from '../../shared/components/button/button.component';
import * as css from './connection.styles';

const Connection: React.FC = () => {
  return (
    <section className={css.connectionSection}>
      <div>
        <h2>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <ul>
          <li>We connect our customers with the best.</li>
          <li>Advisor success customer launch party.</li>
          <li>Business-to-consumer long tail.</li>
        </ul>
        <Button>Start now</Button>
      </div>
      <div>
        <h2>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <ul>
          <li>We connect our customers with the best.</li>
          <li>Advisor success customer launch party.</li>
          <li>Business-to-consumer long tail.</li>
        </ul>
        <Button>Start now</Button>
      </div>
    </section>
  );
};

export default Connection;
