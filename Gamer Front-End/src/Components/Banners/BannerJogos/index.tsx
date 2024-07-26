import { useInView } from "react-intersection-observer";
import CardJogo from "../../Cards";
import { GridLayout } from "../../Container/Container";
import { BannerJogosContent, BannerJogosStyle } from "./style";

const BannerJogos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Anima apenas uma vez quando a seção entra em vista
    threshold: 0.1, // A porcentagem da seção visível para disparar a animação
  });
  return (
    <BannerJogosStyle ref={ref}>
      <GridLayout>
        <BannerJogosContent>
          <CardJogo
            inView={inView}
            direction="left"
            image="fifa"
            text="Mais Popular"
          />
          <CardJogo
            inView={inView}
            direction="right"
            image="cs"
            text="Último Jogo"
          />
        </BannerJogosContent>
      </GridLayout>
    </BannerJogosStyle>
  );
};

export default BannerJogos;
