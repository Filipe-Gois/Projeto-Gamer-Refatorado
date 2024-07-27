import { Theme } from "../../../Styles/Theme";
import IconComponent from "../../IconComponent";
import LinkComponent from "../../LinkComponent";
import { LinkTelefone } from "../../LinkComponent/styles";
import MidiasSociaisComponent from "../MidiasSociais";
import { LiNav } from "../Navbar/style";
import { ContainerContato, HeaderTopStyle } from "./style";

const HeaderTop = () => {
  type BusinessProps = {
    phoneNumber: string;
    email: string;
    hasMessage: boolean;
    textMessage: string;
  };

  const business: BusinessProps = {
    phoneNumber: "551109001010",
    email: "contato@gamer.com.br",
    hasMessage: true,
    textMessage: "Parabéns pela dedicação no projeto Gamer!!",
  };

  const enviarEmail = (): void => {
    // e.preventDefault();
    window.open(`mailto:${business.email}`, "_blank");
  };

  return (
    <HeaderTopStyle>
      <ContainerContato>
        <LiNav>
          <LinkTelefone
            href={`https://wa.me/${business.phoneNumber}?text=${business.textMessage}`}
            target="_blank"
          >
            <IconComponent strokePath={Theme.colors.primary} iconType="phone" />
            <p>(11) 0900-1010</p>
          </LinkTelefone>
        </LiNav>
        <LiNav $isLast>
          <LinkComponent onClick={enviarEmail} to={"/"}>
            {/* <LinkComponent onClick={(e: Event) => enviarEmail(e)} to={"/"}> */}
            <IconComponent iconType="mail" />
            <p>contato@gamer.com.br</p>
          </LinkComponent>
        </LiNav>
      </ContainerContato>

      <MidiasSociaisComponent gap="25px" />
    </HeaderTopStyle>
  );
};

export default HeaderTop;
