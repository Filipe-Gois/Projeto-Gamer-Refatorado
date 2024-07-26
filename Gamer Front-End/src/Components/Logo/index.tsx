import { LinkLogo, LogoStyle } from "./style";

import LogoImage from "../../assets/images/logotipo-gamer.png";

type LogoProps = {
  onClick?: () => void;
};

const Logo = ({ onClick }: LogoProps) => (
  <LinkLogo onClick={onClick} to={"/"}>
    <LogoStyle src={LogoImage} alt="Logotipo da empresa." />{" "}
  </LinkLogo>
);

export default Logo;
