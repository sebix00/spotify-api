import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
*{
    box-sizing:border-box;
}
html{
    font-size: 62.5%;
}
body{
    font-family : "Poppins", sans-serif;
    font-size:1.2rem;
    color: rgb(125,125,125);
    background-color: ${({ theme }) => theme.colors.body}
}


`;

export default GlobalStyles;
