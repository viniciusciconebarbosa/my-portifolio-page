import styled from "styled-components"

export const HeroSection = styled.section`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;


  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 6rem 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 8rem 0;
  }
`

export const HeroContent = styled.div`
  margin: 0 auto;
  max-width: 58rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const HeroTitle = styled.h1`
  
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes["6xl"]};
  }
`

export const HeroSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`
