import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{

font-size: 16px;
a{text-decoration:none}
}
*, ::before, ::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Mulish', sans-serif;
}
body {
    background: ${({ theme }) => theme.white};
}`;
