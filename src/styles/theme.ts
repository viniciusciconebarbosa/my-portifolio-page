// theme.js
import { DefaultTheme } from 'styled-components'
import LightBackground from "@/assets/images/light-theme-background.webp";
import DarkBackground from "@/assets/images/dark-theme-background.webp";
import { BREAKPOINTS, COLORS, FONT_SIZES, SPACES } from './theme.constants';

export const lightTheme: DefaultTheme = {
  colors: {
    ...COLORS.light,
    popover: "var(--popover)",
    popoverForeground: "var(--popover-foreground)",
    secondary: "var(--secondary)",
    secondaryForeground: "var(--secondary-foreground)",
    accent: "var(--accent)",
    accentForeground: "var(--accent-foreground)",
    destructive: "var(--destructive)",
    destructiveForeground: "var(--destructive-foreground)",
    input: "var(--input)",
    ring: "var(--ring)",
  },
  fontSizes: FONT_SIZES,
  space: SPACES,
  breakpoints: BREAKPOINTS,
  radius: '0.5rem',
  backgroundImage: `url(${LightBackground.src})`,
  transition: 'background 1s, background-color 1s, color 1s',
}

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    ...COLORS.dark,
  },
  backgroundImage: `url(${DarkBackground.src})`,
  backgroundPosition: "center bottom 60%",
}
