import { Section, Container, Heading, Text } from '../base';
import Image from "next/image";
import Pic from "@/assets/Picture.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

// ============================================================
// About Section — Redesigned Premium
// ============================================================

const AboutLayout = styled.div`
  display: grid;
  padding-top: ${({ theme }) => theme.space[8]};
  gap: ${({ theme }) => theme.space[12]};
  align-items: start;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 320px 1fr;
    gap: ${({ theme }) => theme.space[16]};
  }
`;

const ProfileSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: relative;
    top: 6rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  padding: 4px;
  background: ${({ theme }) => theme.gradients.gold};
  box-shadow: ${({ theme }) => theme.shadows.glow};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 280px;
    height: 280px;
  }
`;

const ProfileImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(100%);
  transition: filter 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    filter: grayscale(0%);
  }
`;

const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: ${({ theme }) => theme.space[4]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`;

const StatIcon = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({ theme }) => theme.radii.btn};
  background: ${({ theme }) => `${theme.colors.accent}12`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`;

const StatLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.mutedForeground};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-transform: uppercase;
`;

const StatValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.3;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  margin-top: ${({ theme }) => theme.space[2]};
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.mutedForeground};
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentForeground};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-4px);
    box-shadow: 0 8px 20px ${({ theme }) => `${theme.colors.accent}30`};
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[8]};
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fluidSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.widest};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[4]};
  text-align: left;
  position: relative;


`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]};
`;

const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.foreground};
  position: relative;
  padding-left: ${({ theme }) => theme.space[5]};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 3px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.radii.pill};
    opacity: 0.6;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const FocusAreas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[4]};
`;

const FocusCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: ${({ theme }) => theme.space[5]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradients.gold};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};

    &::before {
      opacity: 1;
    }
  }
`;

const FocusIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radii.btn};
  background: ${({ theme }) => `${theme.colors.accent}12`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

const FocusTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[2]};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
`;

const FocusDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  padding: 0.875rem 1.75rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentForeground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radii.pill};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: fit-content;
  margin-top: ${({ theme }) => theme.space[4]};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => `${theme.colors.accent}40`};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <AboutLayout>
          {/* Coluna Esquerda - Profile */}
          <ProfileSection>
            <ImageWrapper
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileImage
                src={Pic.src}
                alt="Vinicius Cicone Barbosa"
                fill
              />
            </ImageWrapper>
                
            <ProfileInfo>
              <StatCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <StatIcon>
                  <Code2 size={20} />
                </StatIcon>
                <StatContent>
                  <StatLabel>Especialidade</StatLabel>
                  <StatValue>Full Stack Developer</StatValue>
                </StatContent>
              </StatCard>

              <StatCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <StatIcon>
                  <GraduationCap size={20} />
                </StatIcon>
                <StatContent>
                  <StatLabel>Formação</StatLabel>
                  <StatValue>Análise e Desenv. de Sistemas</StatValue>
                </StatContent>
              </StatCard>

              <StatCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <StatIcon>
                  <Briefcase size={20} />
                </StatIcon>
                <StatContent>
                  <StatLabel>Experiência</StatLabel>
                  <StatValue>Desenvolvimento Web</StatValue>
                </StatContent>
              </StatCard>

           
              <SocialLinks>
                
                <SocialLink
                  href="https://github.com/viniciusciconebarbosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/vinicius-cicone-barbosa-8673a9147/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} />
                </SocialLink>
                <SocialLink
                  href="mailto:viniciuscicone@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                </SocialLink>
                
              </SocialLinks>
              
            </ProfileInfo>
          </ProfileSection>

          {/* Coluna Direita - Content */}
          <ContentSection>
            <div>
              <StyledHeading>Sobre Mim</StyledHeading>
              <Subtitle>
                Transformando ideias em soluções digitais escaláveis
              </Subtitle>
            </div>

            <TextContent>
              <StyledText>
                Sou um Desenvolvedor Backend apaixonado por arquitetura de software e integrações de alto desempenho. Minha jornada em
                <Highlight> Análise e Desenvolvimento de Sistemas</Highlight> me deu a base teórica, mas foi na prática — construindo desde ERPs em Java (Spring) até gateways de IA com
                Node.js (NestJS) — que desenvolvi minha visão de produto.
              </StyledText>

              <StyledText>
                Acredito que um bom código backend deve ser invisível para o usuário, mas inquebrável para a operação.
                Por isso, aplico princípios de Clean Code, desenvolvo sob a ótica de testes automatizados e orquestro
                ambientes fluidos com Docker e CI/CD. Tenho forte vivência na criação de Webhooks, integração de
                sistemas terceiros (CRMs, automações) e implementação de IA (como a API do Gemini) para tornar
                fluxos de dados mais inteligentes e autônomos.
              </StyledText>

              <StyledText>
                Estou sempre em busca de desafios que exijam soluções criativas
                de infraestrutura e conectividade sistêmica.
              </StyledText>
            </TextContent>

            <FocusAreas>
              <FocusCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <FocusIcon>
                  <Code2 size={24} />
                </FocusIcon>
                <FocusTitle>Backend</FocusTitle>
                <FocusDescription>
                  Java, Spring Boot, NestJS, APIs RESTful e microserviços escaláveis
                </FocusDescription>
              </FocusCard>

              <FocusCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <FocusIcon>
                  <Code2 size={24} />
                </FocusIcon>
                <FocusTitle>Frontend</FocusTitle>
                <FocusDescription>
                  React, Next.js, TypeScript e interfaces modernas responsivas
                </FocusDescription>
              </FocusCard>

              <FocusCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <FocusIcon>
                  <Code2 size={24} />
                </FocusIcon>
                <FocusTitle>DevOps & Cloud</FocusTitle>
                <FocusDescription>
                  Docker, CI/CD, AWS e infraestrutura como código automatizada
                </FocusDescription>
              </FocusCard>
            </FocusAreas>

          </ContentSection>
        </AboutLayout>
      </Container>
    </Section>
  );
};

export default About;
