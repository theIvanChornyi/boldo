import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, A11y } from 'swiper/modules';
import Slide from './feedback-slide.component';
import { SLIDES } from '../feedback.const';
import * as css from '../feedback.styles';

interface IProps extends SwiperProps {
  setSwiperInstance: (swiper: SwiperRef) => void;
}

const Slider: React.FC<IProps> = ({
  children,
  setSwiperInstance,
  ...props
}) => {
  const onSwiper = (swiper: SwiperProps) => setSwiperInstance(swiper);

  const slides = SLIDES.map((slide, i) => {
    return (
      <SwiperSlide key={i}>
        <Slide {...slide} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      {...props}
      onSwiper={onSwiper}
      className={css.slider}
      slidesPerView={1}
      spaceBetween={5}
      loop={true}
      breakpoints={{
        660: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 11,
        },

        1200: {
          spaceBetween: 22,
          slidesPerView: 3,
        },
      }}
      modules={[Navigation, A11y]}
    >
      {slides}
    </Swiper>
  );
};

export default Slider;
