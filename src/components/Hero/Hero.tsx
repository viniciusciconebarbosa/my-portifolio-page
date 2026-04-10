"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import * as Hero from "@/components/Hero/index";
import * as Ui from "@/components/ui";
import { Github, Linkedin, Mail } from "lucide-react";
import * as Layout from "@/components/layout";
import { useAppTheme } from "@/components/theme-provider";
import Typewriter from "typewriter-effect";

// Importação dinâmica — evita SSR do canvas WebGL
const VantaBackground = dynamic(() => import("@/lib/VantaBackground"), {
  ssr: false,
});

// Stagger animation variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark } = useAppTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Hero.HeroSection $isLoaded={isLoaded}>
      <VantaBackground isDark={isDark} />
      {/* Vanta.js animated background */}

      {/* Content with staggered reveal */}
      <Hero.HeroContent
        as={motion.div}
        variants={container}
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
      >
        <motion.div variants={item}>
          <Hero.HeroEyebrow>Full Stack Developer</Hero.HeroEyebrow>
        </motion.div>

        <motion.div variants={item}>
          <Hero.HeroTitle>
            <a className="text-primary">Vinicius Barbosa</a>
            <br />
            <></>
            <Typewriter
              options={{
                strings: [
                  "Engenheiro Backend",
                  "Especialista em Java & NestJS",
                  "Microserviços de Alta Disponibilidade",
                  "Especialista em Automação & n8n",
                  "Soluções de IA com LLMs & RAG",
                  "Infraestrutura & Cloud (Docker/Linux)",
                ],
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 35,
                cursor: "_",
              }}
            />
          </Hero.HeroTitle>
        </motion.div>

        <motion.div variants={item}>
          <Hero.HeroSubtitle>
            Desenvolvedor Full Stack com foco em arquitetura de software,
            integrações de alto desempenho e soluções backend escaláveis.
          </Hero.HeroSubtitle>
        </motion.div>

        <motion.div variants={item}>
          <Hero.ButtonGroup>
            <Ui.ButtonLink href="#contact">Entrar em contato</Ui.ButtonLink>
            <Ui.ButtonLink href="#projects" $variant="outline">
              Veja meu trabalho
            </Ui.ButtonLink>
          </Hero.ButtonGroup>
        </motion.div>

        <motion.div variants={item}>
          <Layout.SocialLinks style={{ marginTop: "0.5rem" }}>
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
        </motion.div>
      </Hero.HeroContent>

      {/* Scroll indicator */}
      <Hero.ScrollIndicator />
    </Hero.HeroSection>
  );
};

export default HeroSection;
