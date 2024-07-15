import { Theme } from "../../../Styles/Theme";
import { CardNoticia } from "../../Cards";
import { GridLayout } from "../../Container/Container";
import Line from "../../Line";
import SubTitle from "../../SubTitle";
import {
  BannerNoticiasContent,
  BannerNoticiasStyle,
  NoticiasBox,
} from "./style";

import Vct from "../../../assets/images/vctImage.png";

const BannerNoticias = () => {
  return (
    <BannerNoticiasStyle>
      <GridLayout>
        <BannerNoticiasContent>
          <SubTitle
            textColor={Theme.colors.tertiary}
            textAlign="center"
            text="NOTÍCIAS"
            margin="84px 0 35px 0"
          />
          <Line backgroundColor={Theme.colors.secondary} width="204px" />

          <NoticiasBox>
            <CardNoticia image={Vct} />
            <CardNoticia image={Vct} />
            <CardNoticia image={Vct} />
            <CardNoticia image={Vct} />
            <CardNoticia image={Vct} />
            <CardNoticia image={Vct} />
            <CardNoticia image={Vct} />
            <CardNoticia image={Vct} />
          </NoticiasBox>
        </BannerNoticiasContent>
      </GridLayout>
    </BannerNoticiasStyle>
  );
};

export default BannerNoticias;
