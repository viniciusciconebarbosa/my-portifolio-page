import './globals.css'
import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { GlobalStyles } from "@/styles/globals"
import StyledComponentsRegistry from "@/lib/registry"

export const metadata: Metadata = {
  // ========== TÍTULO & DESCRIÇÃO (OTIMIZADOS - Opção 3) ==========
  title: "Vinicius Cicone Barbosa | Dev Full Stack: React (Next.js) & Java",
  description: "Vinicius Cicone Barbosa Desenvolvedor Full Stack focado em criar aplicações web rápidas, escaláveis e com boa experiência. Domínio do ecossistema React (Next.js) no front-end e Java/Spring no back-end. Transformo ideias em produtos digitais funcionais. Vamos conversar?",

  // ========== CONFIGURAÇÕES PARA MECANISMOS DE BUSCA ==========
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ========== URL CANÔNICA & BASE (RESOLVE AVISOS) ==========
  alternates: {
    canonical: 'https://www.viniciusbarbosadev.tech',
  },
  metadataBase: new URL('https://www.viniciusbarbosadev.tech'),

  // ========== METADADOS BÁSICOS ==========
  keywords: [
    "vinicius barbosa",
    "Vinicius Cicone Barbosa",
    "desenvolvedor fullstack",
    "desenvolvedor full stack",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "Node.js",
    "frontend",
    "backend",
    "portfolio desenvolvedor",
    "desenvolvedor web"
  ],
  authors: [{ name: "Vinicius Cicone Barbosa" }],
  publisher: "Vinicius Cicone Barbosa",

  // ========== OPEN GRAPH (REDES SOCIAIS) ==========
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.viniciusbarbosadev.tech',
    title: "Vinicius Cicone Barbosa | Dev Full Stack: React (Next.js) & Java",
    description: "Vinicius Cicone Barbosa Desenvolvedor Full Stack focado em criar aplicações web rápidas, escaláveis e com boa experiência. Domínio do ecossistema React (Next.js) no front-end e Java/Spring no back-end.",
    siteName: "Portfólio Vinicius Cicone Barbosa",
    // (OPCIONAL) Adicione uma imagem de preview para redes sociais:
    // images: [{
    //   url: '/og-image.png', // Crie um arquivo og-image.png de 1200x630px na pasta /public
    //   width: 1200,
    //   height: 630,
    //   alt: 'Preview do portfólio de Vinicius Barbosa',
    // }],
  },

  // ========== TWITTER CARD (OPCIONAL) ==========
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "Vinicius Barbosa | Dev Full Stack",
  //   description: "Desenvolvedor Full Stack especializado em React (Next.js) e Java.",
  //   // images: ['/twitter-image.png'], // Imagem específica para o Twitter
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
