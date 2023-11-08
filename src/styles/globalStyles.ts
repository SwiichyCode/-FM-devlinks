"use client";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }         

    body {
       background-color: var(--grey-300);
       font-size: 16px;
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


        --rounded: 12px;
        --rounded-sm: 8px;
    }
`;
