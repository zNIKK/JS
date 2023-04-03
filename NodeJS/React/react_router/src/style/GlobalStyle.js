import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: Arial, Helvetica, sans-serif;
    }

    .content div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    ul {
        list-style: none;
        margin: 0px;
        padding: 0px;
    }

    h1 {
        font-weight: bold;
        font-size: 30px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    
    .link {
        color: gray;
    }
`;


export default GlobalStyle;