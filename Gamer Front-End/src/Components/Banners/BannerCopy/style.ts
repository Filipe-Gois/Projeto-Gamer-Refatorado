import styled, { css } from "styled-components";

type CardPersonagemContentProps = {
  $right?: boolean;
};

type ImagemPersonagemProps = {
  $maxHeight?: string;
};

export const BannerCopyStyle = styled.section`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 1535px;
`;

export const CardPersonagemStyle = styled.article`
  height: max-content;
  width: 100%;
  position: relative;
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
  width: 100%;
  height: 100%;
  max-height: ${(props) => props.$maxHeight || "511px"};
  max-width: 326px;
`;

export const CardPersonagemContent = styled.div<CardPersonagemContentProps>`
  width: 70%;
  height: 55%;
  min-height: 300px;
  max-width: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* gap: 20px; */
  align-items: center;
  padding: 20px;

  border-radius: 8px;

  ${(props) =>
    props.$right
      ? css`
          right: 0px;
          bottom: 90px;
        `
      : css`
          left: -13px;
          bottom: 17px;
        `}

  backdrop-filter: blur(15px);
  background-image: linear-gradient(
    to bottom right,
    rgba(110, 49, 236, 0.2),
    rgba(45, 7, 109, 0.83)
  );
  /* border: 1px solid;
  border-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 1),
      rgba(27, 20, 38, 0)
    )
    1; */
`;

export const CardPersonagemImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 97px;
  max-height: 97px;
`;

export const CardsContainer = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
