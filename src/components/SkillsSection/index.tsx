import styled from "styled-components"

// ============================================================
// Skills Section — Obsidian & Gold
// ============================================================

export const SkillsGrid = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.card};
    height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-2px);
  }
`

export const SkillTitle = styled.h3`
  font-size: ${({ theme }) => theme.fluidSizes.h3};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  margin-bottom: ${({ theme }) => theme.space[4]};
  color: ${({ theme }) => theme.colors.foreground};
`

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
`

export const SkillTag = styled.span`

  padding: 0.55em 0.925em;
  background-color: ${({ theme }) => `${theme.colors.border}10`};
  color: ${({ theme }) => `${theme.colors.primary}`};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: var(--font-mono), 'JetBrains Mono', monospace;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  transition: ${({ theme }) => theme.transitions.fast};
  border: 1px solid ${({ theme }) => `${theme.colors.border}80`};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.accent}`};
    transform: translateY(-1px);
    
    svg {
      * {
        cursor: pointer;
      }
    }
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  * {
    cursor: pointer;
  }
`
