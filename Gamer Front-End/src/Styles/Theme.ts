export const Theme = {
  colors: {
    primary: "#1B1426",
    secondary: "#F9AA01",
    tertiary: "#FFFFFF",
    gray: `rgba(217, 217, 217, 1)`,
    linearGradientPurple: `linear-gradient(to right, rgba(95, 46, 103, 1), rgba(93, 22, 244, 0.65))`,
  },
  fonts: {
    inter: "Inter",
    titilliumWeb: "Titillium Web",
    quickSand: "QuickSand",
  },
};

//tipagem do Tema "pra aparecer o autocomplete ao definir as cores nos componentes"
type ThemeType = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
