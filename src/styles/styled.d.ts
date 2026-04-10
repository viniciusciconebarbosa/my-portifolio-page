import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      foreground: string;
      primary: string;
      primaryForeground: string;
      muted: string;
      mutedForeground: string;
      card: string;
      cardForeground: string;
      border: string;
      popover: string;
      popoverForeground: string;
      secondary: string;
      secondaryForeground: string;
      accent: string;
      accentForeground: string;
      destructive: string;
      destructiveForeground: string;
      input: string;
      ring: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
    };
    fluidSizes: {
      display: string;
      h1: string;
      h2: string;
      h3: string;
    };
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    lineHeights: {
      tight: number;
      snug: number;
      normal: number;
      relaxed: number;
      loose: number;
    };
    letterSpacings: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
      display: string;
    };
    space: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      8: string;
      10: string;
      12: string;
      16: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radii: {
      sm: string;
      btn: string;
      card: string;
      pill: string;
    };
    shadows: {
      card: string;
      cardHover: string;
      glow: string;
      input: string;
    };
    transitions: {
      fast: string;
      base: string;
      slow: string;
      theme: string;
    };
    gradients: {
      primary: string;
      gold: string;
      text: string;
    };
  }
}