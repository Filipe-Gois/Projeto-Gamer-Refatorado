import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";
import "swiper/css/effect-cards";
// import "./styles.css";

type SliderProps = {
  children?: ReactNode;
  settings: SwiperProps;
  addtionalClass?: string;
};

const Slider = ({ children, addtionalClass = "", settings }: SliderProps) => {
  return (
    <Swiper
      className={`${addtionalClass}`}
      modules={[
        Navigation,
        Pagination,
        A11y,
        Scrollbar,
        Autoplay,
        EffectCoverflow,
        EffectCards,
      ]}
      {...settings}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
