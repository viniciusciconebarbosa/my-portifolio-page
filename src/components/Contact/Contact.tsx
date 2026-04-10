"use client";

import { useState, FormEvent } from "react";
import * as Contact from "@/components/Contact";
import * as Ui from "@/components/ui";
import * as Layout from "@/components/layout";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

// ============================================================
// Contact Section — Redesigned Premium
// ============================================================

const ContactLayout = styled.div`
  display: grid;
  padding-top: ${({ theme }) => theme.space[8]};
  gap: ${({ theme }) => theme.space[12]};
  align-items: start;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1.2fr;
    gap: ${({ theme }) => theme.space[16]};
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[8]};
`;

const SectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.fluidSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.widest};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[4]};
  position: relative;

`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const ContactCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: ${({ theme }) => theme.space[5]};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space[4]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.gradients.gold};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateX(4px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};

    &::before {
      opacity: 1;
    }
  }
`;

const ContactIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radii.btn};
  background: ${({ theme }) => `${theme.colors.accent}12`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`;

const ContactLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.mutedForeground};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-transform: uppercase;
`;

const ContactValue = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SocialSection = styled.div`
  margin-top: ${({ theme }) => theme.space[4]};
`;

const SocialTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[4]};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
`;

const SocialLink = styled(motion.a)`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radii.btn};
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

const FormSection = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: ${({ theme }) => theme.space[8]};
  box-shadow: ${({ theme }) => theme.shadows.card};
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
  }
`;

const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;

const FormDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.space[6]};
`;

const StyledFormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[5]};
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75em 1em;
  border-radius: ${({ theme }) => theme.radii.btn};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.input};
    background-color: ${({ theme }) => theme.colors.card};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedForeground};
    opacity: 0.6;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75em 1em;
  border-radius: ${({ theme }) => theme.radii.btn};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  min-height: 140px;
  resize: vertical;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.input};
    background-color: ${({ theme }) => theme.colors.card};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedForeground};
    opacity: 0.6;
  }
`;

const SubmitButton = styled(motion.button)<{ $loading?: boolean }>`
  width: 100%;
  padding: 0.875rem 1.75rem;
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.cardForeground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  border: none;
  border-radius: ${({ theme }) => theme.radii.btn};
  cursor: ${({ $loading }) => ($loading ? 'wait' : 'pointer')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};

  &:hover {
    transform: ${({ $loading }) => ($loading ? 'none' : 'translateY(-2px)')};
    box-shadow: 0 8px 24px ${({ theme }) => `${theme.colors.accent}40`};
  }

  &:active {
    transform: ${({ $loading }) => ($loading ? 'none' : 'translateY(0)')};
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  padding: ${({ theme }) => theme.space[12]} ${({ theme }) => theme.space[6]};
  text-align: center;
`;

const SuccessIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.colors.accent}15`};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
`;

const SuccessTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foreground};
`;

const SuccessText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.mutedForeground};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace('-', '')]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });

    // Reseta mensagem de sucesso após 5 segundos
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Layout.Section id="contact">
      <Layout.Container>
        <AnimatedSection>
          <Ui.SectionTitle>Contato</Ui.SectionTitle>
        </AnimatedSection>

        <ContactLayout>
          {/* Coluna Esquerda - Info */}
          <InfoSection>
            <div>
              <SectionHeading>Vamos Conversar</SectionHeading>
              <SectionSubtitle>
                Tem um projeto em mente ou quer bater um papo sobre tecnologia? 
                Estou sempre aberto a novos desafios e oportunidades de colaboração.
              </SectionSubtitle>
            </div>

            <ContactCard
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <ContactIcon>
                <Mail size={20} />
              </ContactIcon>
              <ContactInfo>
                <ContactLabel>Email</ContactLabel>
                <ContactValue href="mailto:viniciuscicone@gmail.com">
                  viniciuscicone@gmail.com
                </ContactValue>
              </ContactInfo>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <ContactIcon>
                <MapPin size={20} />
              </ContactIcon>
              <ContactInfo>
                <ContactLabel>Localização</ContactLabel>
                <ContactValue style={{ cursor: 'default' }}>
                  Brasil
                </ContactValue>
              </ContactInfo>
            </ContactCard>

            <SocialSection>
              <SocialTitle>Redes Sociais</SocialTitle>
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
            </SocialSection>
          </InfoSection>

          {/* Coluna Direita - Formulário */}
          <FormSection>
            {isSubmitted ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <SuccessIcon>
                  <CheckCircle size={32} />
                </SuccessIcon>
                <SuccessTitle>Mensagem Enviada!</SuccessTitle>
                <SuccessText>
                  Obrigado pelo contato. Responderemos o mais breve possível.
                </SuccessText>
              </SuccessMessage>
            ) : (
              <>
                <FormTitle>Envie uma Mensagem</FormTitle>
                <FormDescription>
                  Preencha o formulário abaixo e retornaremos em breve.
                </FormDescription>

                <form onSubmit={handleSubmit}>
                  <StyledFormGroup>
                    <StyledFormField>
                      <StyledLabel htmlFor="firstName">Nome</StyledLabel>
                      <StyledInput
                        id="firstName"
                        placeholder="Seu nome"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </StyledFormField>
                    <StyledFormField>
                      <StyledLabel htmlFor="lastName">Sobrenome</StyledLabel>
                      <StyledInput
                        id="lastName"
                        placeholder="Seu sobrenome"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </StyledFormField>
                  </StyledFormGroup>

                  <StyledFormField>
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledInput
                      id="email"
                      type="email"
                      placeholder="nome@exemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </StyledFormField>

                  <StyledFormField>
                    <StyledLabel htmlFor="message">Mensagem</StyledLabel>
                    <StyledTextarea
                      id="message"
                      placeholder="Conte-nos sobre seu projeto ou ideia..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </StyledFormField>

                  <SubmitButton
                    type="submit"
                    $loading={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem <Send size={16} />
                      </>
                    )}
                  </SubmitButton>
                </form>
              </>
            )}
          </FormSection>
        </ContactLayout>
      </Layout.Container>
    </Layout.Section>
  );
}


