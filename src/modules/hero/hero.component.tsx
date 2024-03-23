import Button from '../../shared/components/button/button.component';
import Slider from '../../shared/components/slider/slider.component';
import Section from '../../shared/components/section/section.component';
import Header from '../header/header.component';
import { SIZE, VARIANT } from '../../shared/components/button/button.types';
import { ROUTES } from '../../shared/const/routes.const';

import heroFragment1 from '../../assets/images/hero-frame-1.svg';
import heroFragment2 from '../../assets/images/hero-frame-2.svg';
import heroFragment3 from '../../assets/images/hero-frame-3.svg';

import * as css from './hero.styles';

const Hero: React.FC = () => {
  return (
    <Section id={ROUTES.HERO} className={css.section}>
      <Header />
      <div className={css.contentWrapper}>
        <main className={css.main}>
          <h1 className={css.mainTitle}>
            Save time by building
            <br />
            fast with Boldo Template
          </h1>
          <p className={css.text}>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className={css.buttonsWrapper}>
            <Button size={SIZE.LARGE} variant={VARIANT.DEFAULT}>
              Buy template
            </Button>
            <Button size={SIZE.LARGE} variant={VARIANT.TRANSPARENT_LIGHT}>
              Explore
            </Button>
          </div>
        </main>

        <div className={css.imageContainer}>
          <img src={heroFragment1} alt="chart 1" loading="eager" />
          <img src={heroFragment2} alt="chart 2" loading="eager" />
          <img src={heroFragment3} alt="chart 3" loading="eager" />
        </div>
      </div>
      <Slider className={css.slider} />
    </Section>
  );
};

export default Hero;
