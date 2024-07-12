import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import { HeaderStyle } from "./style";
import { GridLayout } from "../Container/Container";

const Header = () => {
  return (
    <HeaderStyle>
      <GridLayout>
        <HeaderTop />
        <HeaderBottom />
      </GridLayout>
    </HeaderStyle>
  );
};

export default Header;
