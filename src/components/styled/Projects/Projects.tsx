"use client";

import * as Projects from "@/components/styled/Projects";
import * as Ui from "@/components/styled/ui";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import * as Layout from "@/components/styled/layout";
import Commerce from "@/assets/commerce.jpg";
import Filme from "@/assets/filme.jpg";
import MySpace from "@/assets/type.jpg";
import RepoJava from "@/assets/java.jpg";
import Hub from "@/assets/git.jpg"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "E-commerce",
      description: "Uma loja online completa",
      image: Commerce.src,
      category: "Web",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://e-modern-shop-vin.vercel.app/",
    },
    {
      title: "CinemaClic",
      description:
        "App",
      image: Filme.src,
      category: "Mobile",
      technologies: ["React Native", "Firebase"],
      link: "https://project-moviedb.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Site de portfólio responsivo apresentando trabalhos e projetos criativos.",
      image: MySpace.src,
      category: "Design",
      technologies: ["Next.js", "CSS"],
      link: "https://github.com/viniciuscicone/my-space",
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
    {
      title: "App",
      description:
        "Mobile app",
        
      image: Hub.src,
      category: "Mobile",
      technologies: ["Flutter", "REST API"],
      link: "#",
    },
    {
      title: "Candy game",
      description: 
        "Simple game in flutter",
      image: Hub.src,
      category: "Design",
      technologies: ["Flutter"],
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
                .filter((p) => p.category === "Mobile")
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
                .filter((p) => p.category === "Design")
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
      </Layout.Container>
    </Layout.Section>
  );
}
