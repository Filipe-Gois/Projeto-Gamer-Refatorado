import ButtonComponent from "../../Button";
import { BannerPrincipalStyle, TitleBanner1 } from "./style";

const BannerPrincipal = () => {
  return (
    <BannerPrincipalStyle>
      <TitleBanner1>Liga Gamers</TitleBanner1>
      <ButtonComponent text="Sobre" />
    </BannerPrincipalStyle>
  );
};

export default BannerPrincipal;
