import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import { HeaderStyle } from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderTop />
      <HeaderBottom />
    </HeaderStyle>
  );
};

export default Header;
