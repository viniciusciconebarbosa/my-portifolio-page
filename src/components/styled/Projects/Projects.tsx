"use client";

import * as Projects from "@/components/styled/Projects";
import * as Ui from "@/components/styled/ui";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import * as Layout from "@/components/styled/layout";
import Commerce from "@/assets/churn.jpg";
import pomo from "@/assets/pomo.jpg";
import MySpace from "@/assets/type.jpg";
import RepoJava from "@/assets/java.jpg";
import Hub from "@/assets/git.jpg"
import ERP from "@/assets/javaSpring.jpg"
import polling from "@/assets/short.jpg"
import pagina from "@/assets/pagina-pessoal.jpg"
import Modal from "react-modal";
import styled from "styled-components";
import Ar from "@/assets/ar.jpg"
import microservice from "@/assets/microservice.jpg"


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
				"ERP robusto com Java 21 e Spring Boot 3.x, apresentando arquitetura desacoplada, segurança com JWT/Spring Security e infraestrutura completa na DigitalOcean com Nginx e CI/CD.",

			image: ERP.src,
			category: "Web",
			technologies: ["Java", "REST API", "Spring-boot", "Next.js"],
			link: "https://github.com/viniciusciconebarbosa/erp-system-library-spring",
		},
		{
			title: "Churn Prediction API (Python/ML)",
			description: "API RESTful de Machine Learning com Random Forest e Pandas para previsão de Churn em tempo real. Focado em ETL e inteligência de dados.",
			image: Commerce.src,
			category: "Web",
			technologies: ["Python", "TypeScript", ],
			link: "https://github.com/viniciusciconebarbosa/machine-learning-frela",
		},
		{
			title: "Word Hierarchy Analyzer (TypeScript/Data Structures)",
			description:
				"Este projeto full-stack foi desenvolvido como solução para um desafio técnico focado em processamento de estruturas de dados complexas (Árvores/Nós) e otimização de performance.",
			image: Ar.src,
			category: "Web",
			technologies: ["Typescript", "Java"],
			link: "https://github.com/viniciusciconebarbosa/analisador-hierarquia-de-palavras",
		},
		{
			title: "Short/Long Polling & WebSocket (Java / Spring Framework)",
			description:
				"Estudo aprofundado de protocolos de comunicação em tempo real. Implementação comparativa de performance entre WebSockets e estratégias de Polling em Java. ",
			image: polling.src,
			category: "API Methods",
			technologies: ["Spring Framework", "API", "JavaScript", "CSS"],
			link: "https://github.com/viniciusciconebarbosa/short-long-polling-websocket",
		},
		{
			title: "Notification Hub – Microserviço Universal ( NestJS / TypeScript )",
			description:
				"Microserviço escalável desenvolvido com NestJS e PostgreSQL para centralização de notificações transacionais. Integra Google Gemini AI para refinamento inteligente de conteúdo e Docker para infraestrutura resiliente. Possui documentação interativa com Swagger e cobertura de testes unitários.",
			image: microservice.src,
			category: "Desktop",
			technologies: ["NestJS", "TypeScript", "Jest", "Docker"],
			link: "https://github.com/viniciusciconebarbosa/notification-hub-nestjs",
		},
		{
			title: "Página Pessoal ( NextJS / TypeScript / Material UI  )",
			description:
				"Uma aplicação web de alta performance construída para demonstrar boas práticas de engenharia de software moderno. Utiliza as tecnologias mais recentes do ecossistema Next.js, com foco em SEO técnico e Core Web Vitals. Toda a entrega é acelerada pela Cloudflare CDN, garantindo uma experiência de usuário instantânea e ranqueamento orgânico superior.",
			image: pagina.src,
			category: "Web",
			technologies: ["Next.js", "TypeScript", "React", "Material UI"],
			link: "https://github.com/viniciusciconebarbosa/my-portifolio-page",
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
