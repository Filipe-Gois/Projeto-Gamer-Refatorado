import { LinkLogo, LogoStyle } from "./style";

import LogoImage from "../../assets/images/logotipo-gamer.png";

const Logo = () => (
  <LinkLogo to={"/"}>
    <LogoStyle src={LogoImage} alt="Logotipo da empresa." />{" "}
  </LinkLogo>
);

export default Logo;
