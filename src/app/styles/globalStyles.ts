"use client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }         

    html {
        font-size: 62.5%;

    }

    body {
       background-color: var(--grey-300);
       font-size: 1.6rem;
    }

    :root {
        --purple: #633CFF;
        --purple-500: #BEADFF;
        --purple-300: #EFEBFF;
        --grey: #737373;
        --grey-800: #333333;
        --grey-500: #D9D9D9;
        --grey-300: #FAFAFA;
        --white: #FFFFFF;
        --red: #FF3939;


        --rounded: 1.2rem;
        --rounded-sm: 0.8rem;
    }
`;
