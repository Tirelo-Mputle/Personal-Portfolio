import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.colors.mainGray};
        background-color: ${({ theme }) => theme.colors.lightPeach};;
    }
    li{
        list-style: none;
    }
`;

export default GlobalStyle;
