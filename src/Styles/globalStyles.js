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
    /* background: ${({ theme }) => theme.background}; */
}
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
