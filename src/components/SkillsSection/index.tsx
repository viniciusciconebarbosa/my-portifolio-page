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
  padding: 0.25em 0.625em;
  background-color: ${({ theme }) => `${theme.colors.accent}18`};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: var(--font-mono), 'JetBrains Mono', monospace;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  transition: ${({ theme }) => theme.transitions.fast};
  border: 1px solid ${({ theme }) => `${theme.colors.accent}20`};

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.accent}25`};
    transform: translateY(-1px);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`
