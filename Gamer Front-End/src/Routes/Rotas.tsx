import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
