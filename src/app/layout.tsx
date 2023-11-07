import { ChakraProvider } from "@chakra-ui/react";
import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { theme } from "@/styles/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Vinicius | Main page",

  description: `Esta e minha pagina pessoal, nela ha meus contatos e informaçoes sobre cada
  tecnologia que tenho domino`,
};

export default function RootLayout({children,}:{children:React.ReactNode;}) 
{
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
