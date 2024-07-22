import styled from "styled-components";
import Banner1Mobile from "../../../assets/images/banner1.png";
import Banner1Tablet from "../../../assets/images/banner1Tablet.png";
import Banner1Desktop from "../../../assets/images/banner1Desktop.png";
import { TitleStyle } from "../../Title/style";

export const BannerPrincipalStyle = styled.section`
  width: 100%;
  height: 606px;
  background-image: url(${Banner1Mobile});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 87px 0;

  @media screen and (min-width: 768px) {
    background-image: url(${Banner1Tablet});
    height: 390px;
    padding: 20px 0 42px 0;
  }

  @media screen and (min-width: 1200px) {
    background-image: url(${Banner1Desktop});
    height: 950px;
    padding: 20px 0 96px 0;
  }
`;

export const TitleBanner1 = styled(TitleStyle)`
  text-shadow: 0 0 7px #fd4255;
  font-size: 40px;
  font-weight: 900;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 80px;
  }
`;
