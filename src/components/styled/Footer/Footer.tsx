"use client";

import * as Layout from "@/components/styled/layout";
import * as Ui from "@/components/styled/ui";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <Layout.Footer>
      <Layout.Container>
        <Layout.FooterInner>
          <Layout.FooterText>© 2024 Vinicius. Todos os direitos reservados.</Layout.FooterText>
          <Layout.SocialLinks>
            <Ui.ButtonLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              $variant="ghost"
              $size="icon"
            >
              <Github size={20} />
            </Ui.ButtonLink>
            <Ui.ButtonLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              $variant="ghost"
              $size="icon"
            >
              <Linkedin size={20} />
            </Ui.ButtonLink>
            <Ui.ButtonLink
              href="mailto:contact@example.com"
              $variant="ghost"
              $size="icon"
            >
              <Mail size={20} />
            </Ui.ButtonLink>
          </Layout.SocialLinks>
        </Layout.FooterInner>
      </Layout.Container>
    </Layout.Footer>
  );
}