import { motion } from "framer-motion";
import styled from "styled-components";

type CardJogoProps = {
  $image?: "fifa" | "cs";
};

export const CardJogoStyle = styled(motion.article)<CardJogoProps>`
  width: 100%;
  height: 189px;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;

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

  @media screen and (min-width: 768px) {
    height: 200px;
    width: 90%;
    max-width: 400px;
  }

  @media screen and (min-width: 1200px) {
    height: 313px;
    max-width: 556px;
  }
`;

export const CardJogoImgMobile = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CardJogoImgDesktop = styled.img`
  width: 100%;
  height: 100%;

  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  background-image: linear-gradient(
    to right bottom,
    rgba(239, 239, 239, 0.6),
    rgba(239, 239, 239, 0.1)
  );
  backdrop-filter: blur(4px);
  width: 100%;
  height: 50px;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const CardNoticiaStyle = styled.article`
  border-radius: 8px;
  user-select: none;
  background-image: linear-gradient(
    to bottom right,
    rgba(37, 26, 52, 0.34),
    rgba(5, 1, 12, 0.79)
  );
  backdrop-filter: blur(6px);
  height: max-content;
  width: 100%;
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
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 285px;
  }
`;
export const CardNoticiaImage = styled.img`
  width: 100%;
  height: 45%;
`;

export const NoticiaContentText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55%;
  gap: 16px;
  padding: 15px;
  text-align: justify;
`;
