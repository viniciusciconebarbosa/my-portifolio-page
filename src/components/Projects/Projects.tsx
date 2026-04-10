"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import * as P from "@/components/Projects";
import * as Ui from "@/components/ui";
import * as Layout from "@/components/layout";
import AnimatedSection from "@/components/AnimatedSection";
import Modal from "react-modal";
import styled from "styled-components";

// Assets
import Commerce from "@/assets/churn.jpg";
import pomo from "@/assets/pomo.jpg";
import MySpace from "@/assets/type.jpg";
import RepoJava from "@/assets/java.jpg";
import Hub from "@/assets/git.jpg";
import ERP from "@/assets/javaSpring.jpg";
import polling from "@/assets/short.jpg";
import pagina from "@/assets/pagina-pessoal.jpg";
import Ar from "@/assets/ar.jpg";
import microservice from "@/assets/microservice.jpg";

// Modal config
if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  border: none;
  outline: none;
  max-width: 96%;
  max-height: 96vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 120%;
  max-height: 96vh;
  object-fit: contain;
`;

// ============================================================
// Data
// ============================================================

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: readonly string[];
  link: string;
}

const CATEGORIES = ["Todos", "Backend", "Full-Stack", "Frontend"] as const;

const projects: Project[] = [
  {
    title: "ERP Gerenciamento de Biblioteca",
    description:
      "ERP robusto com Java 21 e Spring Boot 3.x, apresentando arquitetura desacoplada, segurança com JWT/Spring Security e infraestrutura completa na DigitalOcean com Nginx e CI/CD.",
    image: ERP.src,
    category: "Backend",
    technologies: ["Java", "REST API", "Spring-boot", "Next.js"],
    link: "https://github.com/viniciusciconebarbosa/erp-system-library-spring",
  },
  {
    title: "Notification Hub – Microserviço Universal",
    description:
      "Microserviço escalável desenvolvido com NestJS e PostgreSQL para centralização de notificações transacionais. Integra Google Gemini AI para refinamento inteligente de conteúdo e Docker para infraestrutura resiliente.",
    image: microservice.src,
    category: "Backend",
    technologies: ["NestJS", "TypeScript", "Jest", "Docker"],
    link: "https://github.com/viniciusciconebarbosa/notification-hub-nestjs",
  },
  {
    title: "Churn Prediction API (Python/ML)",
    description:
      "API RESTful de Machine Learning com Random Forest e Pandas para previsão de Churn em tempo real. Focado em ETL e inteligência de dados.",
    image: Commerce.src,
    category: "Backend",
    technologies: ["Python", "TypeScript"],
    link: "https://github.com/viniciusciconebarbosa/machine-learning-frela",
  },
  {
    title: "Word Hierarchy Analyzer",
    description:
      "Projeto full-stack desenvolvido como solução para um desafio técnico focado em processamento de estruturas de dados complexas (Árvores/Nós) e otimização de performance.",
    image: Ar.src,
    category: "Full-Stack",
    technologies: ["TypeScript", "Java"],
    link: "https://github.com/viniciusciconebarbosa/analisador-hierarquia-de-palavras",
  },
  {
    title: "Short/Long Polling & WebSocket",
    description:
      "Estudo aprofundado de protocolos de comunicação em tempo real. Implementação comparativa de performance entre WebSockets e estratégias de Polling em Java.",
    image: polling.src,
    category: "Backend",
    technologies: ["Spring Framework", "API", "JavaScript", "CSS"],
    link: "https://github.com/viniciusciconebarbosa/short-long-polling-websocket",
  },
  {
    title: "Página Pessoal",
    description:
      "Aplicação web de alta performance construída para demonstrar boas práticas de engenharia de software moderno. Utiliza Next.js, com foco em SEO técnico e Core Web Vitals. Entrega acelerada pela Cloudflare CDN.",
    image: pagina.src,
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "React", "Material UI"],
    link: "https://github.com/viniciusciconebarbosa/my-portifolio-page",
  },
];

// ============================================================
// Component
// ============================================================

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const filtered = useMemo(() => {
    if (activeFilter === "Todos") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <Layout.Section id="projects">
      <Layout.Container>
        {/* Header */}
        <AnimatedSection>
          <P.SectionHeader>
            <Ui.SectionTitle>Projetos</Ui.SectionTitle>
            <P.SectionSubtitle>
              Uma seleção de trabalhos que refletem minha abordagem técnica e
              atenção aos detalhes.
            </P.SectionSubtitle>
          </P.SectionHeader>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <P.FilterBar>
            <P.FilterGroup>
              {CATEGORIES.map((cat) => (
                <P.FilterButton
                  key={cat}
                  $active={activeFilter === cat}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </P.FilterButton>
              ))}
            </P.FilterGroup>
          </P.FilterBar>
        </AnimatedSection>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <P.ProjectsGrid>
              {filtered.map((project, index) => (
                <P.ProjectCard key={project.title} $index={index}>
                  {/* Image */}
                  <P.ProjectImageContainer>
                    <P.ProjectImage
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      onClick={() => handleImageClick(project.image || "")}
                      style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                    />
                    <P.ImageOverlay>
                      <P.ViewButton
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Projeto <ArrowUpRight size={14} />
                      </P.ViewButton>
                    </P.ImageOverlay>
                  </P.ProjectImageContainer>

                  {/* Content */}
                  <P.ProjectContent>
                    <P.ProjectCategory>{project.category}</P.ProjectCategory>
                    <P.ProjectTitle>{project.title}</P.ProjectTitle>
                    <P.ProjectDescription>
                      {project.description}
                    </P.ProjectDescription>
                  </P.ProjectContent>

                  {/* Footer */}
                  <P.ProjectFooter>
                    <P.TechStack>
                      {project.technologies.map((tech) => (
                        <P.TechTag key={tech}>{tech}</P.TechTag>
                      ))}
                    </P.TechStack>
                    <P.ProjectLink
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                    </P.ProjectLink>
                  </P.ProjectFooter>
                </P.ProjectCard>
              ))}
            </P.ProjectsGrid>
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <P.EmptyState>Nenhum projeto nesta categoria.</P.EmptyState>
        )}

        {/* Image Modal */}
        <StyledModal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          contentLabel="Imagem do Projeto"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              zIndex: 1000,
            },
          }}
        >
          <ModalImage src={selectedImage} alt="Imagem do projeto" />
        </StyledModal>
      </Layout.Container>
    </Layout.Section>
  );
}
