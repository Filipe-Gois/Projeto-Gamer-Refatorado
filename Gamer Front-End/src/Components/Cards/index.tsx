import {
  ButtonBox,
  CardJogoImgDesktop,
  CardJogoImgMobile,
  CardJogoStyle,
  CardNoticiaImage,
  CardNoticiaStyle,
  NoticiaContentText,
} from "./style";
import fifaMobile from "../../assets/images/fifa23.png";
import csMobile from "../../assets/images/csgo.png";
import { ButtonCardJogos } from "../Button";
import fifaDesktop from "../../assets/images/fifaDesktop.png";
import csDesktop from "../../assets/images/csDesktop.png";
import SectionTitle from "../SectionTitle";
import Paragraph from "../Paragraph";

type CardJogoProps = {
  image?: "fifa" | "cs";
  text: string;
  direction: "left" | "right";
  inView: boolean;
};
type CardNoticiaProps = {
  image: string;
  title?: string;
  description?: string;
};

const CardJogo = ({ image = "cs", text, direction, inView }: CardJogoProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? "-100vw" : "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <CardJogoStyle
      variants={variants}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1.5 }}
    >
      <CardJogoImgMobile src={image === "cs" ? csMobile : fifaMobile} />

      <CardJogoImgDesktop src={image === "cs" ? csDesktop : fifaDesktop} />

      <ButtonBox>
        <ButtonCardJogos text={text} />
      </ButtonBox>
    </CardJogoStyle>
  );
};

const CardNoticia = ({
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
  image,
  title = "Titulo da Notícia",
}: CardNoticiaProps) => {
  return (
    <CardNoticiaStyle>
      <CardNoticiaImage src={image} />

      <NoticiaContentText>
        <SectionTitle text={title} />

        <Paragraph textAlign="justify" fontSize="16px" text={description} />
      </NoticiaContentText>
    </CardNoticiaStyle>
  );
};

export { CardNoticia };
export default CardJogo;
