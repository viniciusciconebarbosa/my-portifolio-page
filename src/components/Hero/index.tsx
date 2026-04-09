import styled from "styled-components"
import { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const HeroSection = styled.section<{ $isLoaded: boolean }>`
  padding: 0rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: ${({ theme }) => theme.backgroundImage}; 
  background-size: cover;
  background-position: ${({ theme }) => theme.backgroundPosition};
  transition: ${({ theme }) => theme.transition};
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 6rem 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 8rem 0;
  }
`

export const HeroContent = styled.div`
  margin: 0 auto;
  padding: 0rem 1rem 1rem;
  max-width: 58rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 1000px) {
    padding: 5rem 6rem 1rem;
  }
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
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  }
`

export const HeroSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: 100;
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
