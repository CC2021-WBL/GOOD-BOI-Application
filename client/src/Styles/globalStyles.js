import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{

font-size: 16px;
a, button {
    cursor:pointer;
    text-decoration:none; 
}
}
*, ::before, ::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Mulish', sans-serif;
}
.mobile_only {
    @media only screen and (min-width: 800px) {
        display: none !important;
    }
}
.desktop_only {
    @media only screen and (max-width: 1599px) {
        display: none;
    }
}

.tablet_only {
    @media only screen and (max-width: 799px) {
        display: none;
    }
}

body {
    background: ${({ theme }) => theme.white};
}

html {
    -ms-overflow-style: none;
     scrollbar-width: none;
}
html::-webkit-scrollbar {
    display: none;
}
`;
