"use client";

import * as Layout from "@/src/components/styled/layout";
import * as Ui from "@/src/components/styled/ui";
import ThemeToggle from "@/src/components/styled/ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <Layout.Container>
      <Layout.HeaderInner>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Layout.NavLink href="/" style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            Home
          </Layout.NavLink>
        </div>
        <Layout.Nav>
          <Layout.NavLink href="#about">Sobre</Layout.NavLink>
          <Layout.NavLink href="#projects">Projetos</Layout.NavLink>
          <Layout.NavLink href="#skills">Habilidades</Layout.NavLink>
          <Layout.NavLink href="#contact">Contato</Layout.NavLink>
        </Layout.Nav>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Ui.Button $variant="ghost" $size="icon" aria-label="Toggle theme">
            <ThemeToggle />
          </Ui.Button>
          <Ui.Button $size="sm" style={{ borderRadius: "9999px" }}>
            Sair
          </Ui.Button>
        </div>
      </Layout.HeaderInner>
    </Layout.Container>
  );
}