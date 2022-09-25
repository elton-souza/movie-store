import { createGlobalStyle } from "styled-components";
import { colors } from "./color";

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.secundary};
  }
`;
