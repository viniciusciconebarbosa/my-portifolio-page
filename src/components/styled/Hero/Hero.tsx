"use client";

import { useEffect, useState } from 'react';
import * as Hero from "@/components/styled/Hero";
import * as Ui from "@/components/styled/ui";
import { Github, Linkedin, Mail } from "lucide-react";
import * as Layout from "@/components/styled/layout";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Hero.HeroSection $isLoaded={isLoaded}>
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
            href="https://github.com/viniciusciconebarbosa"
            target="_blank"
            rel="noopener noreferrer"
            $variant="ghost"
            $size="icon"
          >
            <Github size={20} />
          </Ui.ButtonLink>
          <Ui.ButtonLink
            href="https://www.linkedin.com/in/vinicius-cicone-barbosa-8673a9147/"
            target="_blank"
            rel="noopener noreferrer"
            $variant="ghost"
            $size="icon"
          >
            <Linkedin size={20} />
          </Ui.ButtonLink>
          <Ui.ButtonLink
            href="mailto:viniciuscicone@gmail.com"
            $variant="ghost"
            $size="icon"
          >
            <Mail size={20} />
          </Ui.ButtonLink>
        </Layout.SocialLinks>
      </Hero.HeroContent>
    </Hero.HeroSection>
  );
};

export default HeroSection;
