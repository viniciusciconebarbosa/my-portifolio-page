import styled from "styled-components"

// ============================================================
// Layout Components — Obsidian & Gold
// ============================================================

export const Container = styled.div`
  width: min(100% - 2rem, 75rem);
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 2.5rem);
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 40;
  width: 100%;
  
  background-color: ${({ theme }) => `${theme.colors.background}1A`};
  backdrop-filter: blur(10px) saturate(100%);
  -webkit-backdrop-filter: blur(10px) saturate(100%);
  transition: ${({ theme }) => theme.transitions.theme};
`

export const HeaderInner = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: none;
  gap: ${({ theme }) => theme.space[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  transition: ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transitions.base};
  }

  &:hover::after {
    width: 100%;
  }
`

export const Main = styled.main`
  img {
    transition: opacity 0.3s ease;
    transition: 'opacity 3s, background-color 1s, color 1s'

  }
`

export const Section = styled.section<{ $muted?: boolean }>`
  padding: clamp(3rem, 8vw, 5rem) 0;
  background-color: ${({ $muted, theme }) => ($muted ? `${theme.colors.muted}10` : "transparent")};
  transition: ${({ theme }) => theme.transitions.theme};
`

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.space[6]} 0;
  transition: ${({ theme }) => theme.transitions.theme};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`

export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 5rem;
    flex-direction: row;
  }
`

export const FooterText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.mutedForeground};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`
