import { Theme } from "../../../Styles/Theme";
import { CardNoticia } from "../../Cards";
import { GridLayout } from "../../Container/Container";
import Line from "../../Line";
import SubTitle from "../../SubTitle";
import {
  BannerNoticiasContent,
  BannerNoticiasStyle,
  NoticiasBox,
} from "./style";

import Vct from "../../../assets/images/vctImage.png";
import Loud1 from "../../../assets/images/loud1.png";
import Loud2 from "../../../assets/images/loud2.png";
import Arena from "../../../assets/images/arena.png";
import { Slide, Slider } from "../../Slider";
import { ReactElement, useEffect, useState } from "react";
import { SwiperProps } from "swiper/react";

const BannerNoticias = () => {
  const [noticias, setNoticias] = useState<ReactElement[]>([
    <CardNoticia image={Vct} />,
    <CardNoticia image={Loud1} />,
    <CardNoticia image={Loud2} />,
    <CardNoticia image={Arena} />,
    <CardNoticia image={Loud2} />,
    <CardNoticia image={Arena} />,
    <CardNoticia image={Vct} />,
    <CardNoticia image={Loud1} />,
  ]);

  const [settingsSlides, setSettingsSlides] = useState({
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSettingsSlides({ ...settingsSlides, slidesPerView: 1 });
      } else if (window.innerWidth < 1200) {
        setSettingsSlides({ ...settingsSlides, slidesPerView: 2 });
      } else {
        setSettingsSlides({ ...settingsSlides, slidesPerView: 3 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BannerNoticiasStyle>
      <GridLayout>
        <BannerNoticiasContent>
          <SubTitle
            textColor={Theme.colors.tertiary}
            textAlign="center"
            text="NOTÍCIAS"
            margin="84px 0 35px 0"
          />
          <Line backgroundColor={Theme.colors.secondary} width="204px" />

          <NoticiasBox>
            <Slider settings={settingsSlides}>
              {noticias.map((noticia, index) => {
                return <Slide key={index.toString()}>{noticia}</Slide>;
              })}
            </Slider>
          </NoticiasBox>
        </BannerNoticiasContent>
      </GridLayout>
    </BannerNoticiasStyle>
  );
};

export default BannerNoticias;
