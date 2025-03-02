"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { ThemeProvider as StyledComponentsProvider } from "styled-components"
import { lightTheme, darkTheme } from "@/src/styles/theme"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme } = props

  // After mounting, we have access to the theme
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const theme = resolvedTheme === "dark" ? darkTheme : lightTheme

  return (
    <NextThemesProvider {...props}>
      <StyledComponentsProvider theme={mounted ? theme : lightTheme}>{children}</StyledComponentsProvider>
    </NextThemesProvider>
  )
}

