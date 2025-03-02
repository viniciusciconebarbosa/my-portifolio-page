import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[8]};
`

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  `

export const HeaderInner = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: none;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`

export const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.foreground};

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`

export const Main = styled.main`
  padding: 2.5rem 0;

`

export const Section = styled.section<{ $muted?: boolean }>`
  padding: 3rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 6rem 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 8rem 0;
  }

  background-color: ${({ $muted, theme }) => ($muted ? `${theme.colors.muted}80` : "transparent")};
`

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.5rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`

export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 6rem;
    flex-direction: row;
  }
`

export const FooterText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.mutedForeground};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

