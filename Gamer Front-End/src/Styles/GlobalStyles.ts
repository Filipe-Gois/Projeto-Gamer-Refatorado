import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }

  /* @font-face {
    font-family: "Inter";
    src: url("../assets/fonts/Inter/static/Inter-Regular.ttf");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Titillium Web";
    src: url("../assets/fonts/Titillium_Web/TitilliumWeb-Black.ttf");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Titillium Web";
    src: url("../assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Quicksand";
    src: url("../assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf");
    font-weight: 400;
    font-style: normal;
  } */

  body {
    font-family: 'Inter', sans-serif;
  }
  &::-webkit-scrollbar
    {
      width: 7px;
    }

&::-webkit-scrollbar-track
   { 
    background: ${(props) => props.theme.colors.primary};
   }

&::-webkit-scrollbar-thumb
   { 
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 20px;
    cursor: pointer;
   }

&::-webkit-scrollbar-thumb:hover
   { 
    background: ${(props) => props.theme.colors.secondary};
   }
`;

export default GlobalStyles;
