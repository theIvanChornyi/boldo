import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
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
      slidesPerView={3}
      spaceBetween={22}
      loop={true}
      modules={[Navigation]}
    >
      {slides}
    </Swiper>
  );
};

export default Slider;
