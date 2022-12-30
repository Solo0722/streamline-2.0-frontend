import React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    scroll-behavior:smooth;
}

body {
  width: 100%;
  height: 100%;
  background-color:${({ theme }: any) => theme.backgroundColor};
  color:${({ theme }: any) => theme.text};
  font-family: 'Manrope', sans-serif;
  transition:all 0.50s linear;
  scroll-behavior:smooth;
}



/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

`;
