import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    border-color: ${({ theme }) => theme.colors.border};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    transition: ${({ theme }) => theme.transition};
  }

  html {
    scroll-behavior: smooth;
  }
`; 