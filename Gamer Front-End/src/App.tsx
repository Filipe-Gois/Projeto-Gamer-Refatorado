import React, { useEffect } from "react";
import Routes from "./Routes/Rotas";
import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Styles/Theme";

const App: React.FC = () => {
  const teste: string = import.meta.env.VITE_API_URL;

  useEffect(() => {
    console.log(teste);
  }, []);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
