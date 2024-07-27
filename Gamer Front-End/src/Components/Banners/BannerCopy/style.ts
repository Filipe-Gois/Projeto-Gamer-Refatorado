import { motion } from "framer-motion";
import styled, { css } from "styled-components";

type CardPersonagemContentProps = {
  $right?: boolean;
};

type ImagemPersonagemProps = {
  $isImageKj?: boolean;
};

export const BannerCopyStyle = styled(motion.section)`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 1535px;
  overflow: hidden;

  @media screen and (min-width: 1200px) {
    height: 1000px;
    flex-direction: row;
  }
`;
//animar isso aqui
export const CardPersonagemStyle = styled(motion.article)`
  height: max-content;
  cursor: pointer;
  user-select: none;
  width: 100%;
  position: relative;

  @keyframes Animation {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.05);
    }
  }

  &:hover {
    animation-name: Animation;
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @media screen and (min-width: 1200px) {
    width: max-content;
  }
`;

export const BannerCopyContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImagemPersonagem = styled.img<ImagemPersonagemProps>`
  ${(props) =>
    props.$isImageKj
      ? css`
          max-width: 326px;
          max-height: 511px;
          @media screen and (min-width: 768px) {
            max-width: 363px;
            max-height: 591px;
          }

          @media screen and (min-width: 1200px) {
            max-width: 425px;
            max-height: 692px;
          }
        `
      : css`
          max-width: 326px;
          max-height: 428px;
          @media screen and (min-width: 768px) {
            max-width: 486px;
            max-height: 645px;
          }
          @media screen and (min-width: 1200px) {
            max-width: 521px;
            max-height: 692px;
          }
        `}
`;

export const CardPersonagemContent = styled.div<CardPersonagemContentProps>`
  width: 70%;
  height: 55%;
  min-height: 300px;
  min-width: 231px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  border-radius: 8px;

  ${(props) =>
    props.$right
      ? css`
          right: 0px;
          bottom: 90px;

          @media screen and (min-width: 768px) {
            left: 39%;
            bottom: 75px;
          }

          @media screen and (min-width: 1200px) {
            right: 0;
            left: auto;
          }
        `
      : css`
          left: -13px;
          bottom: 17px;

          @media screen and (min-width: 768px) {
            left: -100px;
            bottom: 75px;
          }

          @media screen and (min-width: 1200px) {
            left: 0;
          }
        `}

  backdrop-filter: blur(15px);
  background-image: linear-gradient(
    to bottom right,
    rgba(110, 49, 236, 0.2),
    rgba(45, 7, 109, 0.83)
  );

  @media screen and (min-width: 768px) {
    width: 360px;
    height: 430px;
    justify-content: flex-start;
    gap: 40px;
    padding: 20px 8%;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const CardPersonagemImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 97px;
  max-height: 97px;

  @media screen and (min-width: 768px) {
    max-width: 153px;
    max-height: 153px;
  }
`;

export const CardsContainer = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
