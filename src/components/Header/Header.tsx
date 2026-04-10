"use client";

import { useState, useEffect } from "react";
import * as Layout from "@/components/layout";
import * as Ui from "@/components/ui";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const navLinks = [
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contato" },
];

const Logo = styled(Layout.NavLink)`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};

  &::after {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: ${({ theme }) => theme.radii.pill};

  &:hover {
    background: ${({ theme }) => theme.colors.muted};
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 39;
    background-color: ${({ theme }) => `${theme.colors.background}1A`};
  backdrop-filter: blur(10px) saturate(100%);
  -webkit-backdrop-filter: blur(10px) saturate(100%);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.space[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const MobileNavLink = styled.a`
  display: block;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  border-radius: ${({ theme }) => theme.radii.btn};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.muted};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fecha o menu mobile ao clicar em um link
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <Layout.Header>
        <Layout.Container>
          <Layout.HeaderInner>
            <Logo href="/"></Logo>
            <Layout.Nav>
              {navLinks.map((link) => (
                <Layout.NavLink key={link.href} href={link.href}>
                  {link.label}
                </Layout.NavLink>
              ))}
            </Layout.Nav>
            <HeaderActions>
              <Ui.Button $variant="ghost" $size="icon" aria-label="Toggle theme">
                <ThemeToggle />
              </Ui.Button>
              <MobileMenuButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </MobileMenuButton>
            </HeaderActions>
          </Layout.HeaderInner>
        </Layout.Container>
      </Layout.Header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}