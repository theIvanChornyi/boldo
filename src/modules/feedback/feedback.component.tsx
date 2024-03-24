import { useState } from 'react';
import { SwiperProps } from 'swiper/react';
import SectionHeader from '../../shared/components/section-header/section-header.component';
import Slider from './components/feedback-slider.component';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import * as css from './feedback.styles';

const Feedback: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperProps | null>(null);

  const prevSlide = (): void => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  const nextSlide = (): void => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className={css.section}>
      <SectionHeader
        className={css.title}
        title="An enterprise template to ramp up your company website"
      />
      <div className={css.buttonsWrapper}>
        <button
          className={css.sliderButton(true)}
          type="button"
          onClick={prevSlide}
        >
          <Arrow />
        </button>
        <button
          className={css.sliderButton()}
          type="button"
          onClick={nextSlide}
        >
          <Arrow />
        </button>
      </div>
      <Slider setSwiperInstance={setSwiper} />
    </section>
  );
};

export default Feedback;
