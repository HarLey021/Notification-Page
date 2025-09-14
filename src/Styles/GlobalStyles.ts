import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,800;1,800&display=swap');   
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Plus Jakarta Sans", sans-serif;
        background-color: #F9FAFD;
    }
`;

export default GlobalStyle;
