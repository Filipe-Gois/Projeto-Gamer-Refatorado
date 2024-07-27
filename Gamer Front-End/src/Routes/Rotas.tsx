import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import HomePage from "../Pages/Home";
import Footer from "../Components/Footer";
import LoginPage from "../Pages/Login";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
