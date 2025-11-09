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
  ArrowRight
} from "lucide-react";

const AboutGrid = styled.div`
  display: grid;
  
  gap: ${({ theme }) => theme.space[8]};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 90%;
  object-fit: fill;
  max-width: 200px;
  aspect-ratio: 1;
  margin: 0 auto;
  padding: 8px;
  border-radius: 5px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 60%, ${({ theme }) => theme.colors.secondary} 100%);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.811);  backdrop-filter: blur(8px) saturate(180%);

  transition: box-shadow 0.3s, border 0.3s;
  
  &:hover {
    box-shadow: 0 0 32px 4px ${({ theme }) => theme.colors.primary};
    border: 0px solid ${({ theme }) => theme.colors.primary};
  }
`;

const ProfileImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 5px;
  &:hover {
    transform: scale(1.04) brightness(1.08);
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.primary}55;
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 4px 6px -1px ${({ theme }) => `${theme.colors.primary}10`},
              0 2px 4px -1px ${({ theme }) => `${theme.colors.primary}05`};
`;

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.9;
  text-align: justify;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 3px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
  }
  
  &:first-of-type {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.foreground};
  }
  
  &:last-of-type {
    margin-bottom: 1rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const InfoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px ${({ theme }) => `${theme.colors.primary}10`};
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.colors.primary}20`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InfoTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.7;
`;

const InfoValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.foreground};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const About = () => {
  return (
    <Section id="about" $muted>
      <Container>
        <StyledHeading>Sobre Mim</StyledHeading>
        <AboutGrid>
          <ImageContainer
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProfileImage
              src={Pic.src}
              alt="Vinicius"
              fill
            />
          </ImageContainer>
          <AboutContent
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StyledText>
              Atualmente faço <Highlight>Análise e Desenvolvimento de Sistemas</Highlight>. Desenvolvedor Full Stack com sólida experiência na construção de aplicações web completas, desde a concepção até a finalização. 
            </StyledText>
            <StyledText>
              Atuo tanto no desenvolvimento de interfaces quanto na implementação de sistemas backend, sempre priorizando soluções eficientes e de alta qualidade. 
            </StyledText>
            <StyledText>
              Tenho expertise em projetos que exigem integração de diferentes camadas de tecnologia, com foco em desempenho e usabilidade. 
      
            </StyledText>

            <InfoCards>
              <InfoCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <IconWrapper>
                  <Code2 size={20} />
                </IconWrapper>
                <InfoContent>
                  <InfoTitle>Especialidade</InfoTitle>
                  <InfoValue>Full Stack</InfoValue>
                </InfoContent>
              </InfoCard>

              <InfoCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <IconWrapper>
                  <GraduationCap size={20} />
                </IconWrapper>
                <InfoContent>
                  <InfoTitle>Formação</InfoTitle>
                  <InfoValue>Análise e Desenvolvimento de Sistemas</InfoValue>
                </InfoContent>
              </InfoCard>

              <InfoCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <IconWrapper>
                  <Briefcase size={20} />
                </IconWrapper>
                <InfoContent>
                  <InfoTitle>Experiência</InfoTitle>
                  <InfoValue>Desenvolvimento Web</InfoValue>
                </InfoContent>
              </InfoCard>
            </InfoCards>

            <SocialLinks>
              <SocialLink
                href="https://github.com/viniciusciconebarbosa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/vinicius-cicone-barbosa-8673a9147/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </SocialLink>
              <SocialLink
                href="mailto:viniciuscicone@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </SocialLink>
            </SocialLinks>
          </AboutContent>
        </AboutGrid>
      </Container>
    </Section>
  );
};

export default About;
