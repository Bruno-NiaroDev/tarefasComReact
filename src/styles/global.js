import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #0d7af3;
        font-family: "Helvetica Neue","Helvetica", Arial, sans-serif;
        font-size: 14px;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }
`;

export default GlobalStyle;