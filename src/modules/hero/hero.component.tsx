import Button from '../../shared/components/button/button.component';
import Slider from './components/hero-slider.component';
import { SIZE, VARIANT } from '../../shared/components/button/button.types';

import heroFragment1 from '../../assets/images/hero-frame-1.svg';
import heroFragment2 from '../../assets/images/hero-frame-2.svg';
import heroFragment3 from '../../assets/images/hero-frame-3.svg';

import * as css from './hero.styles';
import Dialog from '../../shared/components/dialog/dialog.component';
import { useState } from 'react';
import ErrorElem from '../../shared/components/error/error.component';
import Chart from '../../shared/components/chart/chart.component';

const Hero: React.FC = () => {
  const [isOpenTemplate, setIsOpenTemplate] = useState(false);
  const [isOpenExplore, setIsOpenExplore] = useState(false);

  const openTemplateDialog = () => setIsOpenTemplate(true);
  const closeTemplateDialog = () => setIsOpenTemplate(false);
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
              onClick={openTemplateDialog}
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
      <Dialog isOpen={isOpenTemplate} close={closeTemplateDialog}>
        <ErrorElem />
      </Dialog>
      <Dialog isOpen={isOpenExplore} close={closeExploreDialog}>
        <div className={css.chartContainer}>
          <Chart />
        </div>
      </Dialog>
    </>
  );
};

export default Hero;
