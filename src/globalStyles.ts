import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    body {        
        background-color: ${props => props.theme?.colors?.black};
        color: ${props => props.theme?.colors?.white};        
    }

    a {
        text-decoration: none;
        color: inherit;
    }        

`