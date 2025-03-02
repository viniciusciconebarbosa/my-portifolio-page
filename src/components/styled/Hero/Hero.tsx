"use client";

import * as Hero from "@/src/components/styled/Hero";
import * as Ui from "@/src/components/styled/ui";
import { Github, Linkedin, Mail } from "lucide-react";
import * as Layout from "@/src/components/styled/layout";
export default function HeroSection() {
  return (
    <Hero.HeroSection>
      <Hero.HeroContent>
        <Hero.HeroTitle>Olá, Sou Vinicius.</Hero.HeroTitle>
        <Hero.HeroSubtitle>
          Um desenvolvedor Full Stack apaixonado e especializado em construir
          experiências digitais excepcionais
        </Hero.HeroSubtitle>
        <Hero.ButtonGroup>
          <Ui.ButtonLink href="#contact">Entrar em contato</Ui.ButtonLink>
          <Ui.ButtonLink href="#projects" $variant="outline">
            Veja meu trabalho
          </Ui.ButtonLink>
        </Hero.ButtonGroup>
        <Layout.SocialLinks style={{ marginTop: "1.5rem" }}>
          <Ui.ButtonLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            $variant="ghost"
            $size="icon"
          >
            <Github size={20} />
          </Ui.ButtonLink>
          <Ui.ButtonLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            $variant="ghost"
            $size="icon"
          >
            <Linkedin size={20} />
          </Ui.ButtonLink>
          <Ui.ButtonLink
            href="mailto:contact@example.com"
            $variant="ghost"
            $size="icon"
          >
            <Mail size={20} />
          </Ui.ButtonLink>
        </Layout.SocialLinks>
      </Hero.HeroContent>
    </Hero.HeroSection>
  );
}
