// theme.ts — Obsidian & Gold Design System for Styled Components
// theme.js
import { DefaultTheme } from 'styled-components'

import {
  BREAKPOINTS,
  COLORS,
  FONT_SIZES,
  FLUID_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  LETTER_SPACINGS,
  SPACES,
  RADII,
  SHADOWS,
  TRANSITIONS,
  GRADIENTS,
} from './theme.constants';

export const lightTheme: DefaultTheme = {

  colors: COLORS.light,
  fontSizes: FONT_SIZES,
  fluidSizes: FLUID_SIZES,
  fontWeights: FONT_WEIGHTS,
  lineHeights: LINE_HEIGHTS,
  radius: '0.5rem',
  transition: 'background 1s, background-color 1s, color 1s',

  letterSpacings: LETTER_SPACINGS,
  space: SPACES,
  breakpoints: BREAKPOINTS,
  radii: RADII,
  shadows: SHADOWS,
  transitions: TRANSITIONS,
  gradients: {
    primary: GRADIENTS.light,
    gold: GRADIENTS.gold,
    text: GRADIENTS.text,
  },
}

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    ...COLORS.dark,
  },
  shadows: {
    ...lightTheme.shadows,
    card: SHADOWS.darkCard,
    cardHover: SHADOWS.darkCardHover,
    glow: SHADOWS.darkGlow,
    input: SHADOWS.darkInput,
  },
  gradients: {
    primary: GRADIENTS.dark,
    gold: GRADIENTS.gold,
    text: GRADIENTS.textDark,
  },
}
