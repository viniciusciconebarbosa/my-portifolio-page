"use client";

import * as Contact from "@/components/styled/Contact";
import * as Ui from "@/components/styled/ui";
import * as Layout from "@/components/styled/layout";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCard = styled(Ui.Card)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 6px -1px ${({ theme }) => `${theme.colors.primary}10`},
              0 2px 4px -1px ${({ theme }) => `${theme.colors.primary}05`};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 12px -1px ${({ theme }) => `${theme.colors.primary}15`},
                0 4px 6px -1px ${({ theme }) => `${theme.colors.primary}10`};
  }
`;

const StyledCardTitle = styled(Ui.CardTitle)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const StyledCardDescription = styled(Ui.CardDescription)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
`;

const StyledButton = styled(Ui.Button)`
  width: 100%;
  padding: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px ${({ theme }) => `${theme.colors.primary}20`};
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
  }
`;

const StyledSectionTitle = styled(Ui.SectionTitle)`
  color: ${({ theme }) => theme.colors.text};
`;

export default function ContactSection() {
  return (
    <Layout.Section id="contact" $muted>
      <Layout.Container>
        <StyledSectionTitle>Entrar em contato.</StyledSectionTitle>
        <Contact.ContactContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StyledCard>
              <Ui.CardHeader>
                <StyledCardTitle>Contact Me</StyledCardTitle>
                <StyledCardDescription>
                  Preencha o formulário abaixo e entrarei em contato com você
                  assim que possível.
                </StyledCardDescription>
              </Ui.CardHeader>
              <Ui.CardContent>
                <form>
                  <Contact.FormGroup>
                    <Contact.FormField>
                      <Contact.Label htmlFor="first-name">Nome</Contact.Label>
                      <Contact.Input id="first-name" placeholder="Nome" />
                    </Contact.FormField>
                    <Contact.FormField>
                      <Contact.Label htmlFor="last-name">Sobrenome</Contact.Label>
                      <Contact.Input id="last-name" placeholder="Sobrenome" />
                    </Contact.FormField>
                  </Contact.FormGroup>
                  <Contact.FormField>
                    <Contact.Label htmlFor="email">Email</Contact.Label>
                    <Contact.Input
                      id="email"
                      type="email"
                      placeholder="nome@exemplo.com"
                    />
                  </Contact.FormField>
                  <Contact.FormField>
                    <Contact.Label htmlFor="message">Message</Contact.Label>
                    <Contact.Textarea
                      id="message"
                      placeholder="Sua mensagem aqui..."
                    />
                  </Contact.FormField>
                </form>
              </Ui.CardContent>
              <Ui.CardFooter>
                <StyledButton>Enviar e-mail</StyledButton>
              </Ui.CardFooter>
            </StyledCard>
          </motion.div>
        </Contact.ContactContainer>
      </Layout.Container>
    </Layout.Section>
  );
}
