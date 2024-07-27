import styled from "styled-components";
import backGroundMobile from "../../assets/images/footerBackGourndImageMobile.png";
import backGroundTablet from "../../assets/images/footerBackGourndImageTablet.png";
import backGroundDesktop from "../../assets/images/footerBackGourndImageDesktop.png";
import { Container } from "../Container/Container";
import { ParagraphStyle } from "../Paragraph/style";

export const FooterStyle = styled.footer`
  width: 100%;
  /* height: 1531px; */
  background-image: url(${backGroundMobile});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${backGroundTablet});
  }

  @media screen and (min-width: 1200px) {
    background-image: url(${backGroundDesktop});
  }
`;

export const FooterRow1 = styled.div`
  display: flex;
  /* position: absolute; */
  width: 100%;
  height: 100%;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    gap: 32px;
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;

    max-height: 307px;
  }
`;
export const FooterRow2 = styled(FooterRow1)`
  /* position: static; */
`;

export const ContainerFooter = styled(Container)`
  @media screen and (min-width: 1200px) {
    padding: 0 0 40px 0;
    flex-direction: row;
  }
`;

export const CopyRyghtText = styled(ParagraphStyle)`
  margin-bottom: 40px;
  font-family: ${(props) => props.theme.fonts.titilliumWeb};
  font-weight: 400;
  font-size: 16px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
    margin-top: 91px;
  }
`;

export const FooterGradient = styled.div`
  display: none;

  @media screen and (min-width: 1200px) {
    display: flex;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(36, 6, 54, 0.59),
      rgba(67, 3, 99, 0.03)
    );
    width: 100%;
    height: 212px;
  }
`;
