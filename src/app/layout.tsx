import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider"
import { GlobalStyles } from "@/src/styles/globals"
import StyledComponentsRegistry from "@/src/lib/registry"

export const metadata: Metadata = {
  title: "Vinicius | Portfolio",
  description: "Desenvolvedor Full Stack especializado em React, Next.js e Java.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

import './globals.css'