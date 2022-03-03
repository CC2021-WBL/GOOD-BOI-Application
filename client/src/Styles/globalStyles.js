import { createGlobalStyle } from 'styled-components';
import { device } from '../Consts/devices';

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
.mobile_only {
    /* TODO: try to do without !important */
    @media only screen and ${device.tablet} {
        display: none !important;
    }
}
body {
    background: ${({ theme }) => theme.white};
}`;
