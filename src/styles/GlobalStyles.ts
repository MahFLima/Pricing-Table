import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  :root{
    --blue: #74A3BE;
    --text-white: #fff;
    --text-blue: #1E2338;
    --text-gray: #828799;
  }
`;
