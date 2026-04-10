import styled from "styled-components"
import Link from "next/link"

// ============================================================
// UI Components — Obsidian & Gold
// ============================================================

export const Button = styled.button<{ $variant?: "default" | "outline" | "ghost"; $size?: "default" | "sm" | "icon" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  
  border-radius: ${({ $size, theme }) => ($size === "icon" ? theme.radii.pill : theme.radii.btn)};
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "outline":
        return `
          background-color: transparent;
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.foreground};
          &:hover {
            background-color: ${theme.colors.muted};
            border-color: ${theme.colors.accent};
          }
        `
      case "ghost":
        return `
          background-color: transparent;
          border: none;
          color: ${theme.colors.mutedForeground};
          &:hover {
            color: ${theme.colors.accent};
            background-color: ${theme.colors.accent}12;
          }
        `
      default:
        return `
          background-color: ${theme.colors.primary};
          border: none;
          color: ${theme.colors.primaryForeground};
          &:hover {
            opacity: 0.85;
          }
        `
    }
  }}
  
  ${({ $size, theme }) => {
    switch ($size) {
      case "sm":
        return `
          height: 2.25rem;
          padding: 0.625em 1.25em;
          font-size: ${theme.fontSizes.sm};
        `
      case "icon":
        return `
          height: 2.5rem;
          width: 2.5rem;
          padding: 0;
          font-size: ${theme.fontSizes.base};
        `
      default:
        return `
          height: 2.75rem;
          padding: 0.625em 1.5em;
          font-size: ${theme.fontSizes.sm};
        `
    }
  }}
`

export const ButtonLink = styled(Link)<{
  $variant?: "default" | "outline" | "ghost"
  $size?: "default" | "sm" | "icon"
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  
  border-radius: ${({ $size, theme }) => ($size === "icon" ? theme.radii.pill : theme.radii.btn)};
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "outline":
        return `
          background-color: transparent;
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.foreground};
          &:hover {
            background-color: ${theme.colors.muted};
            border-color: ${theme.colors.accent};
          }
        `
      case "ghost":
        return `
          background-color: transparent;
          border: none;
          color: ${theme.colors.mutedForeground};
          &:hover {
            color: ${theme.colors.accent};
            background-color: ${theme.colors.accent}12;
          }
        `
      default:
        return `
          background-color: ${theme.colors.primary};
          border: none;
          color: ${theme.colors.primaryForeground};
          &:hover {
            opacity: 0.85;
          }
        `
    }
  }}
  
  ${({ $size, theme }) => {
    switch ($size) {
      case "sm":
        return `
          height: 2.25rem;
          padding: 0.625em 1.25em;
          font-size: ${theme.fontSizes.sm};
        `
      case "icon":
        return `
          height: 2.5rem;
          width: 2.5rem;
          padding: 0;
          font-size: ${theme.fontSizes.base};
        `
      default:
        return `
          height: 2.75rem;
          padding: 0.625em 1.5em;
          font-size: ${theme.fontSizes.sm};
        `
    }
  }}
`

// ============================================================
// Card
// ============================================================

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`

export const CardHeader = styled.div`
  padding: ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[6]} 0;
`

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.cardForeground};
  margin-bottom: ${({ theme }) => theme.space[2]};
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.space[6]};
`

export const CardFooter = styled.div`
  padding: 0 ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[6]};
`

// ============================================================
// Tabs
// ============================================================

export const TabsContainer = styled.div`
  width: 100%;
`

export const TabsList = styled.div`
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.muted};
  padding: ${({ theme }) => theme.space[1]};
  border-radius: ${({ theme }) => theme.radii.btn};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const TabsTrigger = styled.button<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: none;
  background-color: ${({ $active, theme }) => ($active ? theme.colors.card : "transparent")};
  color: ${({ $active, theme }) => ($active ? theme.colors.foreground : theme.colors.mutedForeground)};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};

  ${({ $active, theme }) => $active && `
    box-shadow: ${theme.shadows.card};
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`

export const TabsContent = styled.div<{ $active?: boolean }>`
  margin-top: ${({ theme }) => theme.space[8]};
  display: ${({ $active }) => ($active ? "block" : "none")};
`

// ============================================================
// Section Title — with gold accent line
// ============================================================

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fluidSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.widest};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-bottom: ${({ theme }) => theme.space[10]};
  text-align: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 2rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    margin: ${({ theme }) => theme.space[3]} auto 0;
    border-radius: ${({ theme }) => theme.radii.pill};
  }
`
