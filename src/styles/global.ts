import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    src: url('../assets/fonts/Roboto-Regular.ttf'),
  }
  @font-face {
    font-family: 'Roboto';
    font-style:'Bold';
    src: url('../assets/fonts/Roboto-Bold.ttf'),
  }

  
  
  
 

`;
