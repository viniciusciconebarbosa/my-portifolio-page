import styled, { keyframes, css } from "styled-components"

// ============================================================
// Projects Section — Obsidian & Gold (Redesigned)
// ============================================================

// Animations
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// Section header
export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[10]};
`

export const SectionSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 36rem;
  margin: ${({ theme }) => theme.space[3]} auto 0;
`

// Filter bar
export const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space[10]};
  padding: 0 ${({ theme }) => theme.space[4]};
  position: relative;
  z-index: 1;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`

export const FilterGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[1]};
  padding: ${({ theme }) => theme.space[1]};
  background: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  justify-content: center;
  width: auto;
  max-width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    gap: ${({ theme }) => theme.space[1]};
    padding: 0.35rem;
  }
`

export const FilterButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1.125rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  white-space: nowrap;
  flex-shrink: 0;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
  }

  ${({ $active, theme }) =>
    $active
      ? css`
          background: ${theme.colors.accent};
          color: ${theme.colors.accentForeground};
          font-weight: ${theme.fontWeights.semibold};
          box-shadow: 0 2px 12px ${theme.colors.accent}40;
        `
      : css`
          background: transparent;
          color: ${theme.colors.mutedForeground};

          &:hover {
            color: ${theme.colors.foreground};
            background: ${theme.colors.border};
          }
        `}
`

// Grid
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`

// Card
export const ProjectCard = styled.article<{ $index?: number }>`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.card};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  animation: ${fadeInUp} 0.5s ease both;
  animation-delay: ${({ $index }) => ($index || 0) * 0.08}s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.accent}40 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => `${theme.colors.accent}30`};
    box-shadow:
      0 16px 48px ${({ theme }) => `${theme.colors.accent}08`},
      0 4px 16px rgba(0, 0, 0, 0.06);

    &::before {
      opacity: 1;
    }
  }
`

// Image
export const ProjectImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  width: 100%;
  overflow: hidden;
`

export const ProjectImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProjectCard}:hover & {
    filter: grayscale(0%);
    transform: scale(1.06);
  }
`

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    ${({ theme }) => `${theme.colors.card}E6`} 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.space[4]};

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`

export const ViewButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  transition: all 0.3s ease;
  transform: translateY(8px);
  opacity: 0;

  ${ProjectCard}:hover & {
    transform: translateY(0);
    opacity: 1;
  }

  &:hover {
    box-shadow: 0 4px 16px ${({ theme }) => `${theme.colors.accent}50`};
  }
`

// Content
export const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[5]};
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ProjectCategory = styled.span`
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-family: var(--font-mono), 'JetBrains Mono', monospace;
  padding: 0.2em 0.625em;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => `${theme.colors.accent}15`};
  color: ${({ theme }) => theme.colors.accent};
  white-space: nowrap;
  width: fit-content;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.space[2]};
`

export const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.cardForeground};
  letter-spacing: ${({ theme }) => theme.letterSpacings.tight};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  margin-bottom: ${({ theme }) => theme.space[2]};
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

// Footer
export const ProjectFooter = styled.div`
  padding: 0 ${({ theme }) => theme.space[5]} ${({ theme }) => theme.space[4]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
`

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[1]};
`

export const TechTag = styled.span`
  font-size: 0.625rem;
  font-family: var(--font-mono), 'JetBrains Mono', monospace;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 0.2em 0.5em;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => `${theme.colors.muted}`};
  color: ${({ theme }) => theme.colors.mutedForeground};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wider};
  border: 1px solid ${({ theme }) => `${theme.colors.border}50`};
  transition: all 0.2s ease;

  ${ProjectCard}:hover & {
    border-color: ${({ theme }) => `${theme.colors.accent}25`};
  }
`

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

// Divider
export const GoldDivider = styled.div`
  width: 3rem;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent};
  margin: 0 auto ${({ theme }) => theme.space[6]};
  border-radius: ${({ theme }) => theme.radii.pill};
`

// Empty state
export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.space[16]} 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.base};
`
