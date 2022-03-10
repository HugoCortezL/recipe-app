import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 13px; 
        font-family: "Open Sans", sans-serif;
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
        background: linear-gradient(to bottom, #fff 0%, #f3f7f7 100%);
    }

    .link-not-style{
        text-decoration: none;
        &:active{
            color: inherit;
        }
    }
`