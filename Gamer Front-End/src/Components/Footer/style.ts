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
  }
`;
export const FooterRow2 = styled(FooterRow1)`
  @media screen and (min-width: 1200px) {
    max-height: 307px;
  }
`;

export const ContainerFooter = styled(Container)`
  @media screen and (min-width: 1200px) {
    padding: 106px 0 40px 0;
    flex-direction: row;
  }
`;

export const CopyRyghtText = styled(ParagraphStyle)`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
    margin-top: 91px;
  }
`;
