import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import HomePage from "../Pages/Home";
import Footer from "../Components/Footer";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
