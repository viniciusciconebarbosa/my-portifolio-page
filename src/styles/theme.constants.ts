// ============================================================
// Design System: Obsidian & Gold — Styled Components Tokens
// Personalidade: Autoridade · Precisão · Premium
// ============================================================

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

// Escala modular (razão 1.25 — Major Third)
export const FONT_SIZES = {
  xs: '0.75rem',       // ~12px
  sm: '0.875rem',      // ~14px
  base: '1rem',        // ~16px
  lg: '1.125rem',      // ~18px
  xl: '1.25rem',       // ~20px
  '2xl': '1.5rem',     // ~24px
  '3xl': '1.875rem',   // ~30px
  '4xl': '2.25rem',    // ~36px
  '5xl': '3rem',       // ~48px
  '6xl': '3.75rem',    // ~60px
} as const;

// clamp() para headings responsivos sem media queries
export const FLUID_SIZES = {
  display: 'clamp(1.25rem, 4vw, 1.5rem)',
  h1: 'clamp(1.75rem, 5vw, 2.5rem)',
  h2: 'clamp(0.75rem, 1.5vw, 0.875rem)',
  h3: 'clamp(1rem, 2vw, 1.125rem)',
} as const;

export const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

export const LINE_HEIGHTS = {
  tight: 1.1,
  snug: 1.15,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
} as const;

export const LETTER_SPACINGS = {
  tighter: '-0.02em',
  tight: '-0.01em',
  normal: '0',
  wide: '0.01em',
  wider: '0.04em',
  widest: '0.10em',
  display: '0.15em',
} as const;

// Escala de espaçamento em rem (8px grid)
export const SPACES = {
  1: '0.25rem',   // ~4px  — separação interna mínima
  2: '0.5rem',    // ~8px  — gap entre ícone e texto
  3: '0.75rem',   // ~12px — espaçamentos pequenos
  4: '1rem',      // ~16px — padding interno de card
  5: '1.25rem',   // ~20px
  6: '1.5rem',    // ~24px — gutter entre colunas
  8: '2rem',      // ~32px — espaços médios
  10: '2.5rem',   // ~40px — margens externas
  12: '3rem',     // ~48px
  16: '4rem',     // ~64px — espaço entre seções
} as const;

export const RADII = {
  sm: '0.25rem',          // ~4px  — tags internas, código
  btn: '0.5rem',          // ~8px  — botões
  card: '0.75rem',        // ~12px — cards e modais
  pill: '624.9375rem',    // pill infinito — badges
} as const;

export const SHADOWS = {
  card: '0 0.25rem 1.5rem rgba(0, 0, 0, 0.04)',
  cardHover: '0 0.5rem 2rem rgba(0, 0, 0, 0.08)',
  glow: '0 0 1.5rem rgba(234, 88, 12, 0.15)',
  input: '0 0 0 0.1875rem rgba(234, 88, 12, 0.12)',
  darkCard: '0 0.5rem 2rem rgba(0, 0, 0, 0.4), 0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)',
  darkCardHover: '0 0.75rem 2.5rem rgba(0, 0, 0, 0.5), 0 0.35rem 1rem rgba(0, 0, 0, 0.3)',
  darkGlow: '0 0 2rem rgba(234, 88, 12, 0.25), 0 0 4rem rgba(249, 115, 22, 0.1)',
  darkInput: '0 0 0 0.1875rem rgba(249, 115, 22, 0.15)',
} as const;

export const TRANSITIONS = {
  fast: 'all 0.15s ease',
  base: 'all 0.2s ease',
  slow: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  theme: 'background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.3s ease',
} as const;

// ============================================================
// Paleta Obsidian & Gold
// ============================================================
export const COLORS = {
  light: {
    background: '#FAFAFA',          // Cinza muito claro — fundo principal
    foreground: '#1A1A1A',          // Cinza quase preto — texto principal
    card: '#FFFFFF',                // Branco — cards, inputs
    cardForeground: '#1A1A1A',      // Cinza quase preto
    popover: '#FFFFFF',
    popoverForeground: '#1A1A1A',
    primary: '#1A1A1A',             // Cinza escuro — botões, headings
    primaryForeground: '#FFFFFF',   // Branco — texto em botões
    secondary: '#F5F5F5',           // Cinza claro — backgrounds secundários
    secondaryForeground: '#1A1A1A',
    muted: '#F0F0F0',               // Cinza neutro — backgrounds sutis
    mutedForeground: '#737373',     // Cinza médio — legendas, labels
    accent: '#EA580C',              // Laranja vibrante — links, badges, destaques
    accentForeground: '#FFFFFF',
    destructive: '#DC2626',
    destructiveForeground: '#FFFFFF',
    border: '#E5E5E5',              // Cinza claro — bordas de cards
    input: '#E5E5E5',
    ring: '#EA580C',                // Laranja — focus ring
  },
  dark: {
    background: '#1A1A1A',          // Cinza muito escuro — fundo principal
    foreground: '#FAFAFA',          // Cinza quase branco — texto principal
    card: '#262626',                // Cinza escuro — cards
    cardForeground: '#FAFAFA',
    popover: '#262626',
    popoverForeground: '#FAFAFA',
    primary: '#EA580C',             // Laranja — botões primários
    primaryForeground: '#FFFFFF',   // Branco — texto em botões
    secondary: '#2A2A2A',           // Cinza surface — superfícies secundárias
    secondaryForeground: '#FAFAFA',
    muted: '#333333',               // Cinza médio — backgrounds sutis
    mutedForeground: '#A3A3A3',     // Cinza claro — legendas
    accent: '#F97316',              // Laranja claro — destaques
    accentForeground: '#FFFFFF',
    destructive: '#EF4444',
    destructiveForeground: '#FFFFFF',
    border: '#404040',              // Cinza visível — bordas
    input: '#404040',
    ring: '#F97316',                // Laranja claro — focus ring
  },
} as const;

export const GRADIENTS = {
  light: 'linear-gradient(135deg, #1A1A1A 0%, #404040 40%, #EA580C 100%)',
  dark: 'linear-gradient(135deg, #EA580C 0%, #F97316 40%, #C2410C 100%)',
  gold: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #C2410C 100%)',
  text: 'linear-gradient(135deg, #1A1A1A 0%, #EA580C 100%)',
  textDark: 'linear-gradient(135deg, #FAFAFA 0%, #F97316 100%)',
} as const;