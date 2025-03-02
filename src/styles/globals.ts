"use client"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border-color: ${({ theme }) => theme.colors.border};
  }

  body {
    color: ${({ theme }) => theme.colors.foreground};
    background-color: ${({ theme }) => theme.colors.background};
    transition: ${({ theme }) => theme.transition};
    font-family: 'Inter', sans-serif;
  }


  html {
    scroll-behavior: smooth;
    
  }
`

