import CardJogo from "../../Cards";
import { GridLayout } from "../../Container/Container";
import { BannerJogosContent, BannerJogosStyle } from "./style";

const BannerJogos = () => {
  return (
    <BannerJogosStyle>
      <GridLayout>
        <BannerJogosContent>
          <CardJogo image="fifa" text="Mais Popular" />
          <CardJogo image="cs" text="Último Jogo" />
        </BannerJogosContent>
      </GridLayout>
    </BannerJogosStyle>
  );
};

export default BannerJogos;
