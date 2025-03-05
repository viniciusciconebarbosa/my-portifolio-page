"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as StyledComponentsProvider, useTheme as useStyledTheme } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/theme";
import type { DefaultTheme } from 'styled-components';
import { GlobalStyles } from "@/styles/GlobalStyles";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // After mounting, we have access to the theme
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NextThemesProvider {...props}>
      <ThemedStyledComponentsProvider>
        <GlobalStyles />
        {mounted && children} {/* Renderiza children apenas após a montagem */}
      </ThemedStyledComponentsProvider>
    </NextThemesProvider>
  );
}

function ThemedStyledComponentsProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme(); // Usando o hook useTheme para acessar o tema atual

  // Define o tema com base no resolvedTheme
  const theme = resolvedTheme === "dark" ? darkTheme : lightTheme;

  return (
    <StyledComponentsProvider theme={theme}>
      {children}
    </StyledComponentsProvider>
  );
}

export function useAppTheme() {
  const { resolvedTheme, setTheme } = useTheme();
  const theme = useStyledTheme();

  return {
    theme: theme as DefaultTheme,
    currentTheme: resolvedTheme,
    setTheme,
    isDark: resolvedTheme === 'dark',
  };
}

// Hook para acessar cores específicas do tema
export function useThemeColor(colorKey: keyof DefaultTheme['colors']) {
  const { theme } = useAppTheme();
  return theme.colors[colorKey];
}

// Hook para acessar breakpoints
export function useBreakpoint(breakpoint: keyof DefaultTheme['breakpoints']) {
  const { theme } = useAppTheme();
  return theme.breakpoints[breakpoint];
}