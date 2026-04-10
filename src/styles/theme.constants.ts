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
  card: '0 0.25rem 1.5rem rgba(28, 25, 23, 0.04)',
  cardHover: '0 0.5rem 2rem rgba(28, 25, 23, 0.08)',
  glow: '0 0 1.5rem rgba(201, 169, 110, 0.15)',
  input: '0 0 0 0.1875rem rgba(201, 169, 110, 0.12)',
  darkCard: '0 0.5rem 2rem rgba(0, 0, 0, 0.4), 0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)',
  darkCardHover: '0 0.75rem 2.5rem rgba(0, 0, 0, 0.5), 0 0.35rem 1rem rgba(0, 0, 0, 0.3)',
  darkGlow: '0 0 2rem rgba(212, 184, 122, 0.25), 0 0 4rem rgba(212, 184, 122, 0.1)',
  darkInput: '0 0 0 0.1875rem rgba(212, 184, 122, 0.15)',
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
    background: '#FDFCF8',          // Creme — fundo principal
    foreground: '#1C1917',          // Obsidian — texto principal
    card: '#FFFFFF',                // Branco — cards, inputs
    cardForeground: '#1C1917',      // Obsidian
    popover: '#FFFFFF',
    popoverForeground: '#1C1917',
    primary: '#1C1917',             // Obsidian — botões, headings
    primaryForeground: '#F5F0E8',   // Creme claro — texto em botões
    secondary: '#F5EED8',           // Gold claro — backgrounds secundários
    secondaryForeground: '#1C1917',
    muted: '#F5F0E8',               // Creme muted — backgrounds sutis
    mutedForeground: '#8B7E6A',     // Warm Gray — legendas, labels
    accent: '#C9A96E',              // Gold — links, badges, destaques
    accentForeground: '#1C1917',
    destructive: '#DC2626',
    destructiveForeground: '#F5F0E8',
    border: '#E8E0D4',              // Sand — bordas de cards
    input: '#E8E0D4',
    ring: '#C9A96E',                // Gold — focus ring
  },
  dark: {
    background: '#1C1917',          // Warm charcoal — mais claro e suave
    foreground: '#FAF6F0',          // Warm cream — texto principal
    card: '#262320',                // Elevated surface — cards mais claros
    cardForeground: '#FAF6F0',
    popover: '#262320',
    popoverForeground: '#FAF6F0',
    primary: '#C9A96E',             // Gold — botões primários no dark
    primaryForeground: '#1C1917',   // Charcoal — texto em botões gold
    secondary: '#2E2A26',           // Warm surface — superfícies secundárias
    secondaryForeground: '#FAF6F0',
    muted: '#2A2622',               // Ambient surface — backgrounds sutis
    mutedForeground: '#B8A898',     // Warm gold-gray — legendas mais claras
    accent: '#D4B87A',              // Brighter gold — mais vivo no escuro
    accentForeground: '#1C1917',
    destructive: '#EF4444',
    destructiveForeground: '#FAF6F0',
    border: '#3A3530',              // Visible warm border
    input: '#3A3530',
    ring: '#D4B87A',                // Gold ring — mais brilhante
  },
} as const;

export const GRADIENTS = {
  light: 'linear-gradient(135deg, #1C1917 0%, #3D342A 40%, #C9A96E 100%)',
  dark: 'linear-gradient(135deg, #D4B87A 0%, #C9A96E 40%, #A8894E 100%)',
  gold: 'linear-gradient(135deg, #C9A96E 0%, #D4B87A 50%, #8B6914 100%)',
  text: 'linear-gradient(135deg, #1C1917 0%, #C9A96E 100%)',
  textDark: 'linear-gradient(135deg, #FAF6F0 0%, #D4B87A 100%)',
} as const;