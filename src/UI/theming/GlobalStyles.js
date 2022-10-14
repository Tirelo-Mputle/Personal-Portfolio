import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: ${({ theme }) => theme.fontSizes.xxMed};
        color: ${({ theme }) => theme.colors.mainGray};
        background-color: ${({ theme }) => theme.colors.lightPeach};;
    }
    a{
        text-decoration: none;
   
    }
    li{
        list-style: none;
    }
`;

export default GlobalStyle;
