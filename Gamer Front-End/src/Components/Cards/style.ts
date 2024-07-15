import styled from "styled-components";

type CardJogoProps = {
  $image?: "fifa" | "cs";
};

export const CardJogoStyle = styled.article<CardJogoProps>`
  width: 100%;
  height: 189px;
  position: relative;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 90%;
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
    display: flex;
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
  background-image: linear-gradient(
    to bottom right,
    rgba(37, 26, 52, 0.34),
    rgba(5, 1, 12, 0.79)
  );
  backdrop-filter: blur(6px);
  max-height: 387px;
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
  padding: 20px;
`;
