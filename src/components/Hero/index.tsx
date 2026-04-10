import styled, { keyframes } from "styled-components"

// ============================================================
// Hero — Obsidian & Gold (Vanta.js background)
// ============================================================

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const HeroSection = styled.section<{ $isLoaded: boolean }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  /* Entrada suave na montagem */
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 1s ease;
`

export const HeroContent = styled.div`
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2.5rem);
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[6]};
  position: relative;
  z-index: 2;
`

export const HeroEyebrow = styled.span`
  font-size: ${({ theme }) => theme.fluidSizes.h2};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.widest};
  color: ${({ theme }) => theme.colors.ring};
`

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fluidSizes.h1};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights.snug};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tighter};
  color: ${({ theme }) => theme.colors.foreground};
  min-height: 3.5rem;
  
  .Typewriter__cursor {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    margin-left: 2px;
  }
  a {
    color: ${({ theme }) => theme.colors.foreground};
 
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`

export const HeroSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 38rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[2]};
`

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: ${fadeIn} 1s ease 2s both;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors.accent};
    margin: 0 auto;
    animation: ${slideUp} 1.5s ease infinite;
  }
`
