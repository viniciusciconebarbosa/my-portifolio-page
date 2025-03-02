import styled from "styled-components"

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const ProjectCard = styled.div`
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const ProjectImageContainer = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
  overflow: hidden;
`

export const ProjectImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const ProjectHeader = styled.div`
  padding: 1.5rem 1.5rem 0.75rem;
`

export const ProjectHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.cardForeground};
`

export const ProjectCategory = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => `${theme.colors.primary}20`};
  color: ${({ theme }) => theme.colors.primary};
`

export const ProjectDescription = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const ProjectFooter = styled.div`
  padding: 0.75rem 1.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const TechTag = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.mutedForeground};
`

