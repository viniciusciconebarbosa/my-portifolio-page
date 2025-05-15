"use client";

import * as Projects from "@/components/styled/Projects";
import * as Ui from "@/components/styled/ui";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import * as Layout from "@/components/styled/layout";
import Commerce from "@/assets/commerce.jpg";
import Filme from "@/assets/filme.jpg";
import MySpace from "@/assets/type.jpg";
import RepoJava from "@/assets/java.jpg";
import Hub from "@/assets/git.jpg"
import ERP from "@/assets/javaSpring.jpg"
import Weather from "@/assets/tempoApp.jpg"
import Cambio from "@/assets/cambio.jpg"
import Modal from "react-modal";
import styled from "styled-components";

// Configuração do Modal
if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
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
  border-radius: 8px;
`;

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const projects = [
    {
      title: "ERP Gerenciamento de biblioteca",
      description:
        "Um sistema ERP robusto projetado para otimizar a gestão de bibliotecas",
        
      image: ERP.src,
      category: "Desktop Web",
      technologies: ["Java", "REST API", "Spring-boot", "Next.js"],
      link: "https://github.com/viniciusciconebarbosa/erp-system-library-spring",
    },
    {
      title: "E-commerce",
      description: "O ShopMaster é uma plataforma de e-commerce inovadora e intuitiva que visa proporcionar uma experiência de compra online perfeita para os usuários",
      image: Commerce.src,
      category: "Web",
      technologies: ["Next.js", "TypeScript", ],
      link: "https://e-modern-shop-vin.vercel.app/",
    },
    {
      title: "Previsão do Tempo Google",
      description: 
        "Aplicação de previsão do tempo desenvolvida com Angular, oferecendo animações climáticas e interface moderna.",
      image: Weather.src,
      category: "Weather",
      technologies: ["Angular", "Weather API", "TypeScript", "CSS"],
      link: "https://angular-weather-seven.vercel.app/",
    },
    {
      title: "CinemaClic",
      description:
        "Aplicativo de filmes e series, onde e possivel ver um trailer e achar as informaçoes mais relevantes de diversos filmes, series e artistas favoritos. Aplicaçao compativel com dispositivos moveis.",
      image: Filme.src,
      category: "Desktop Web",
      technologies: ["Next.JS", "TypeScript", "JestJS", "MaterialUI"],
      link: "https://project-moviedb.vercel.app/",
    },
    {
      title: "CambioNews-App",
      description:
        "O Cambio News é uma aplicação web que fornece informações atualizadas sobre câmbio, notícias financeiras e análises de mercado",
      image: Cambio.src,
      category: "News Portal",
      technologies: ["Remix.js", "TypeScript", "TailwindCSS", "React"],
      link: "https://cambio-news-remix-app.vercel.app/",
    },
    {
      title: "Task Manager",
      description:
        "Um projeto em SpringBoot",
      image: RepoJava.src,
      category: "Web",
      technologies: ["JAVA", "Spring-bot"],
      link: "#",
    },
  ] as const;

  return (
    <Layout.Section id="projects" $muted>
      <Layout.Container>
        <Ui.SectionTitle>Projetos</Ui.SectionTitle>
        <Ui.TabsContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <Ui.TabsList>
              <Ui.TabsTrigger
                $active={activeTab === "all"}
                onClick={() => setActiveTab("all")}
              >
                All
              </Ui.TabsTrigger>
              <Ui.TabsTrigger
                $active={activeTab === "web"}
                onClick={() => setActiveTab("web")}
              >
                Web
              </Ui.TabsTrigger>
              <Ui.TabsTrigger
                $active={activeTab === "mobile"}
                onClick={() => setActiveTab("mobile")}
              >
                Mobile
              </Ui.TabsTrigger>
              <Ui.TabsTrigger
                $active={activeTab === "design"}
                onClick={() => setActiveTab("design")}
              >
                Design
              </Ui.TabsTrigger>
            </Ui.TabsList>
          </div>
          <Ui.TabsContent $active={activeTab === "all"}>
            <Projects.ProjectsGrid>
              {projects.map((project, index) => (
                <Projects.ProjectCard key={index}>
                  <Projects.ProjectImageContainer>
                    <Projects.ProjectImage
                      src={project.image?.toString() || "/placeholder.svg"}
                      alt={project.title}
                      onClick={() => handleImageClick(project.image?.toString() || "")}
                      style={{ cursor: "pointer" }}
                    />
                  </Projects.ProjectImageContainer>
                  <Projects.ProjectHeader>
                    <Projects.ProjectHeaderTop>
                      <Projects.ProjectTitle>
                        {project.title}
                      </Projects.ProjectTitle>
                      <Projects.ProjectCategory>
                        {project.category}
                      </Projects.ProjectCategory>
                    </Projects.ProjectHeaderTop>
                    <Projects.ProjectDescription>
                      {project.description}
                    </Projects.ProjectDescription>
                  </Projects.ProjectHeader>
                  <Projects.ProjectFooter>
                    <Projects.TechStack>
                      {project.technologies.map((tech, index) => (
                        <Projects.TechTag key={index}>{tech}</Projects.TechTag>
                      ))}
                    </Projects.TechStack>
                    <Ui.ButtonLink
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      $variant="ghost"
                      $size="sm"
                    >
                      View <ArrowUpRight size={16} />
                    </Ui.ButtonLink>
                  </Projects.ProjectFooter>
                </Projects.ProjectCard>
              ))}
            </Projects.ProjectsGrid>
          </Ui.TabsContent>
          <Ui.TabsContent $active={activeTab === "web"}>
            <Projects.ProjectsGrid>
              {projects
                .filter((p) => p.category === "Web")
                .map((project, index) => (
                  <Projects.ProjectCard key={index}>
                    <Projects.ProjectImageContainer>
                      <Projects.ProjectImage
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                      />
                    </Projects.ProjectImageContainer>
                    <Projects.ProjectHeader>
                      <Projects.ProjectHeaderTop>
                        <Projects.ProjectTitle>
                          {project.title}
                        </Projects.ProjectTitle>
                        <Projects.ProjectCategory>
                          {project.category}
                        </Projects.ProjectCategory>
                      </Projects.ProjectHeaderTop>
                      <Projects.ProjectDescription>
                        {project.description}
                      </Projects.ProjectDescription>
                    </Projects.ProjectHeader>
                    <Projects.ProjectFooter>
                      <Projects.TechStack>
                        {project.technologies.map((tech, index) => (
                          <Projects.TechTag key={index}>
                            {tech}
                          </Projects.TechTag>
                        ))}
                      </Projects.TechStack>
                      <Ui.ButtonLink
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        $variant="ghost"
                        $size="sm"
                      >
                        View <ArrowUpRight size={16} />
                      </Ui.ButtonLink>
                    </Projects.ProjectFooter>
                  </Projects.ProjectCard>
                ))}
            </Projects.ProjectsGrid>
          </Ui.TabsContent>
          <Ui.TabsContent $active={activeTab === "mobile"}>
            <Projects.ProjectsGrid>
              {projects
                .filter((p) => p.category === "Desktop Web")
                .map((project, index) => (
                  <Projects.ProjectCard key={index}>
                    <Projects.ProjectImageContainer>
                      <Projects.ProjectImage
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                      />
                    </Projects.ProjectImageContainer>
                    <Projects.ProjectHeader>
                      <Projects.ProjectHeaderTop>
                        <Projects.ProjectTitle>
                          {project.title}
                        </Projects.ProjectTitle>
                        <Projects.ProjectCategory>
                          {project.category}
                        </Projects.ProjectCategory>
                      </Projects.ProjectHeaderTop>
                      <Projects.ProjectDescription>
                        {project.description}
                      </Projects.ProjectDescription>
                    </Projects.ProjectHeader>
                    <Projects.ProjectFooter>
                      <Projects.TechStack>
                        {project.technologies.map((tech, index) => (
                          <Projects.TechTag key={index}>
                            {tech}
                          </Projects.TechTag>
                        ))}
                      </Projects.TechStack>
                      <Ui.ButtonLink
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        $variant="ghost"
                        $size="sm"
                      >
                        View <ArrowUpRight size={16} />
                      </Ui.ButtonLink>
                    </Projects.ProjectFooter>
                  </Projects.ProjectCard>
                ))}
            </Projects.ProjectsGrid>
          </Ui.TabsContent>
          <Ui.TabsContent $active={activeTab === "design"}>
            <Projects.ProjectsGrid>
              {projects
                .filter((p) => p.category === "Web")
                .map((project, index) => (
                  <Projects.ProjectCard key={index}>
                    <Projects.ProjectImageContainer>
                      <Projects.ProjectImage
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                      />
                    </Projects.ProjectImageContainer>
                    <Projects.ProjectHeader>
                      <Projects.ProjectHeaderTop>
                        <Projects.ProjectTitle>
                          {project.title}
                        </Projects.ProjectTitle>
                        <Projects.ProjectCategory>
                          {project.category}
                        </Projects.ProjectCategory>
                      </Projects.ProjectHeaderTop>
                      <Projects.ProjectDescription>
                        {project.description}
                      </Projects.ProjectDescription>
                    </Projects.ProjectHeader>
                    <Projects.ProjectFooter>
                      <Projects.TechStack>
                        {project.technologies.map((tech, index) => (
                          <Projects.TechTag key={index}>
                            {tech}
                          </Projects.TechTag>
                        ))}
                      </Projects.TechStack>
                      <Ui.ButtonLink
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        $variant="ghost"
                        $size="sm"
                      >
                        View <ArrowUpRight size={16} />
                      </Ui.ButtonLink>
                    </Projects.ProjectFooter>
                  </Projects.ProjectCard>
                ))}
            </Projects.ProjectsGrid>
          </Ui.TabsContent>
        </Ui.TabsContainer>

        <StyledModal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          contentLabel="Imagem do Projeto"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              zIndex: 1000
            }
          }}
        >
          <ModalImage src={selectedImage} alt="Imagem do projeto" />
        </StyledModal>
      </Layout.Container>
    </Layout.Section>
  );
}
