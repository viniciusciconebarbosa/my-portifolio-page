"use client";

import * as Contact from "@/src/components/styled/Contact";
import * as Ui from "@/src/components/styled/ui";
import * as Layout from "@/src/components/styled/layout";

export default function ContactSection() {
  return (
    <Layout.Section id="contact" $muted>
      <Layout.Container>
        <Ui.SectionTitle>Entrar em contato.</Ui.SectionTitle>
        <Contact.ContactContainer>
          <Ui.Card>
            <Ui.CardHeader>
              <Ui.CardTitle>Contact Me</Ui.CardTitle>
              <Ui.CardDescription>
                Preencha o formulário abaixo e entrarei em contato com você
                assim que possível.
              </Ui.CardDescription>
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
              <Ui.Button style={{ width: "100%" }}>Enviar e-mail</Ui.Button>
            </Ui.CardFooter>
          </Ui.Card>
        </Contact.ContactContainer>
      </Layout.Container>
    </Layout.Section>
  );
}
