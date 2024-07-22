import { Theme } from "../../../Styles/Theme";
import { GridLayout } from "../../Container/Container";
import Line from "../../Line";
import {
  BannerCopyContent,
  BannerCopyStyle,
  CardPersonagemContent,
  CardPersonagemImage,
  CardPersonagemStyle,
  CardsContainer,
  ImagemPersonagem,
} from "./style";

import kjMobile from "../../../assets/images/kiljoyMobile.png";
import jinxMobile from "../../../assets/images/jinxMobile.png";

import kjTablet from "../../../assets/images/kiljoyTablet.png";
import jinxTablet from "../../../assets/images/jinxTablet.png";

import kjDesktop from "../../../assets/images/kiljoyDesktop.png";
import jinxDesktop from "../../../assets/images/jinxDesktop.png";

import ControleMobile from "../../../assets/images/controle.png";
import InstrutoMobile from "../../../assets/images/instrutor.png";

import ControleTablet from "../../../assets/images/ControleTablet.png";
import InstrutorTablet from "../../../assets/images/InstrutorTablet.png";

import SubTitle from "../../SubTitle";
import SectionTitle from "../../SectionTitle";
import Paragraph from "../../Paragraph";
import { useEffect, useState } from "react";

const BannerCopy = () => {
  type PersonagensProps = {
    imgKj: string;
    imgJinx: string;
    imgInstrutor: string;
    imgControle: string;
  };

  const [images, setImages] = useState<PersonagensProps | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImages({
          imgKj: kjMobile,
          imgJinx: jinxMobile,
          imgControle: ControleMobile,
          imgInstrutor: InstrutoMobile,
        });
      } else if (window.innerWidth < 1200) {
        setImages({
          imgKj: kjTablet,
          imgJinx: jinxTablet,
          imgControle: ControleTablet,
          imgInstrutor: InstrutorTablet,
        });
      } else {
        setImages({
          imgInstrutor: InstrutorTablet,
          imgControle: ControleTablet,
          imgKj: kjDesktop,
          imgJinx: jinxDesktop,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <BannerCopyStyle>
      <GridLayout>
        <BannerCopyContent>
          <SubTitle
            textColor={Theme.colors.primary}
            textAlign="center"
            text="Entre para o time Pro Gamer"
            margin="84px 0 35px 0"
          />

          <Line width="204px" />

          <CardsContainer>
            <CardPersonagemStyle>
              <ImagemPersonagem $isImageKj src={images?.imgKj} />

              <CardPersonagemContent $right>
                <CardPersonagemImage src={images?.imgControle} />

                <SectionTitle textAlign="center" text="20 JOGOS DIFERENTES" />

                <Paragraph
                  textAlign="justify"
                  text="São mais de 20 jogos em 2 plataformas dispóniveis para que você possa aprender melhores técnicas."
                />
              </CardPersonagemContent>
            </CardPersonagemStyle>
            <CardPersonagemStyle>
              <ImagemPersonagem src={images?.imgJinx} />

              <CardPersonagemContent>
                <CardPersonagemImage src={images?.imgInstrutor} />

                <SectionTitle textAlign="center" text="53 PROFESSORES" />

                <Paragraph
                  textAlign="justify"
                  text={`Temos 53 Proplayers no nosso time para ensinar todas as estratégias, você vai aprender do básico ao avançado. Tempo de treinamento, descanso, equipamentos.`}
                />
              </CardPersonagemContent>
            </CardPersonagemStyle>
          </CardsContainer>
        </BannerCopyContent>
      </GridLayout>
    </BannerCopyStyle>
  );
};

export default BannerCopy;

// import { Theme } from "../../../Styles/Theme";
// import { GridLayout } from "../../Container/Container";
// import Line from "../../Line";
// import {
//   BannerCopyContent,
//   BannerCopyStyle,
//   CardPersonagemContent,
//   CardPersonagemImage,
//   CardPersonagemStyle,
//   CardsContainer,
//   ImagemPersonagem,
// } from "./style";

// import kjMobile from "../../../assets/images/kiljoyMobile.png";
// import jinxMobile from "../../../assets/images/jinxMobile.png";
// import Controle from "../../../assets/images/controle.png";
// import Instrutor from "../../../assets/images/instrutor.png";
// import SubTitle from "../../SubTitle";
// import SectionTitle from "../../SectionTitle";
// import Paragraph from "../../Paragraph";

// const BannerCopy = () => {
//   return (
//     <BannerCopyStyle>
//       <GridLayout>
//         <BannerCopyContent>
//           <SubTitle
//             textColor={Theme.colors.primary}
//             textAlign="center"
//             text="Entre para o time Pro Gamer"
//             margin="84px 0 35px 0"
//           />

//           <Line width="204px" />

//           <CardsContainer>
//             <CardPersonagemStyle>
//               <ImagemPersonagem src={kjMobile} />

//               <CardPersonagemContent $right>
//                 <CardPersonagemImage src={Controle} />

//                 <SectionTitle textAlign="center" text="20 JOGOS DIFERENTES" />

//                 <Paragraph
//                   textAlign="justify"
//                   text="São mais de 20 jogos em 2 plataformas dispóniveis para que você possa aprender melhores técnicas."
//                 />
//               </CardPersonagemContent>
//             </CardPersonagemStyle>
//             <CardPersonagemStyle>
//               <ImagemPersonagem $maxHeight="428px" src={jinxMobile} />

//               <CardPersonagemContent>
//                 <CardPersonagemImage src={Instrutor} />

//                 <SectionTitle textAlign="center" text="53 PROFESSORES" />

//                 <Paragraph
//                   textAlign="justify"
//                   text={`Temos 53 Proplayers no nosso time para ensinar todas as estratégias, você vai aprender do básico ao avançado. Tempo de treinamento, descanso, equipamentos.`}
//                 />
//               </CardPersonagemContent>
//             </CardPersonagemStyle>
//           </CardsContainer>
//         </BannerCopyContent>
//       </GridLayout>
//     </BannerCopyStyle>
//   );
// };

// export default BannerCopy;
