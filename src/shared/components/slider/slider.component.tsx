import React, { useMemo } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { ReactComponent as BoldoSlide } from '../../../assets/icons/boldo.svg';
import { ReactComponent as PrestoSlide } from '../../../assets/icons/presto.svg';

import * as css from './slider.styles';

interface IProps extends SwiperProps {}

const Slider: React.FC<IProps> = ({ children, ...props }) => {
  const slides = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => {
        return (
          <SwiperSlide className={css.slide} key={i}>
            {i % 2 === 0 ? <BoldoSlide /> : <PrestoSlide />}
          </SwiperSlide>
        );
      }),
    []
  );

  return (
    <Swiper
      {...props}
      className={css.slider}
      slidesPerView={10}
      spaceBetween={56}
      loop={true}
      navigation={true}
      freeMode
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {slides}
    </Swiper>
  );
};

export default Slider;
