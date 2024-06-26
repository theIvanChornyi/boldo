import Button from '../../shared/components/button/button.component';
import Slider from './components/hero-slider.component';
import { SIZE, VARIANT } from '../../shared/components/button/button.types';

import heroFragment1 from '../../assets/icons/hero-frame-1.svg';
import heroFragment2 from '../../assets/icons/hero-frame-2.svg';
import heroFragment3 from '../../assets/icons/hero-frame-3.svg';

import * as css from './hero.styles';
import Dialog from '../../shared/components/dialog/dialog.component';
import { useState } from 'react';
import Chart from '../../shared/components/chart/chart.component';

const Hero: React.FC = () => {
  const [isOpenExplore, setIsOpenExplore] = useState(false);

  const openExploreDialog = () => setIsOpenExplore(true);
  const closeExploreDialog = () => setIsOpenExplore(false);

  return (
    <>
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
            <Button
              size={SIZE.LARGE}
              variant={VARIANT.DEFAULT}
              onClick={openExploreDialog}
            >
              Buy template
            </Button>
            <Button
              size={SIZE.LARGE}
              onClick={openExploreDialog}
              variant={VARIANT.TRANSPARENT_LIGHT}
            >
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

      <Dialog isOpen={isOpenExplore} close={closeExploreDialog}>
        <div className={css.chartContainer}>
          <Chart data={[35, 30, 35]} />
        </div>
      </Dialog>
    </>
  );
};

export default Hero;
