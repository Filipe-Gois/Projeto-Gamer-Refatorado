import ArrowUp from "../../Components/ArrowUp";
import BannerCopy from "../../Components/Banners/BannerCopy";
import BannerJogos from "../../Components/Banners/BannerJogos";
import BannerNoticias from "../../Components/Banners/BannerNoticias";
import BannerPrincipal from "../../Components/Banners/BannerPrincipal";
import { MainContent } from "../../Components/Container/Container";

const HomePage = () => {
  return (
    <MainContent>
      <BannerPrincipal />
      <BannerJogos />
      <BannerCopy />
      <BannerNoticias />
      <ArrowUp />
    </MainContent>
  );
};

export default HomePage;
