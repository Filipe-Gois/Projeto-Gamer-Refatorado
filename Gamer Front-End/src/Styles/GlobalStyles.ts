import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Inter";
    src: url("../assets/fonts/Inter/static/Inter-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Titillium Web";
    src: url("../assets/fonts/Titillium_Web/TitilliumWeb-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Titillium Web";
    src: url("../assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Quicksand";
    src: url("../assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyles;
