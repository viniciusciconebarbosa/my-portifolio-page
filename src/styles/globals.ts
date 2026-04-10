"use client"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  /* ============================================
     Reset & Base — Obsidian & Gold
     ============================================ */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border-color: ${({ theme }) => theme.colors.border};
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: ${({ theme }) => theme.colors.foreground};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1rem;
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    transition: ${({ theme }) => theme.transitions.theme};
  }

  /* ============================================
     Typography Defaults
     ============================================ */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.snug};
    color: ${({ theme }) => theme.colors.foreground};
  }

  p {
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  /* ============================================
     Selection & Focus
     ============================================ */
  ::selection {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }

  /* ============================================
     Scrollbar (Webkit)
     ============================================ */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.pill};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  /* ============================================
     Image Defaults
     ============================================ */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* ============================================
     Form Defaults
     ============================================ */
  input, button, textarea, select {
    font: inherit;
  }
`
