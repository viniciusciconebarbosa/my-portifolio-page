import styled from "styled-components"
import Link from "next/link"

export const Button = styled.button<{ $variant?: "default" | "outline" | "ghost"; $size?: "default" | "sm" | "icon" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ $size }) => ($size === "icon" ? "9999px" : "0.5rem")};
  font-weight: 500;
  cursor: pointer;
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "outline":
        return `
          background-color: transparent;
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.foreground};
          &:hover {
            background-color: ${theme.colors.muted};
          }
        `
      case "ghost":
        return `
          background-color: transparent;
          border: none;
          color: ${theme.colors.foreground};
          &:hover {
            background-color: ${theme.colors.muted};
          }
        `
      default:
        return `
          background-color: ${theme.colors.primary};
          border: none;
          color: ${theme.colors.primaryForeground};
          &:hover {
            background-color: ${theme.colors.primary}dd;
          }
        `
    }
  }}
  
  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return `
          height: 2rem;
          padding: 0 0.75rem;
          font-size: 0.875rem;
        `
      case "icon":
        return `
          height: 2.5rem;
          width: 2.5rem;
          padding: 0;
        `
      default:
        return `
          height: 2.5rem;
          padding: 0 1rem;
          font-size: 1rem;
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
  border-radius: ${({ $size }) => ($size === "icon" ? "9999px" : "0.5rem")};
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "outline":
        return `
          background-color: transparent;
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.foreground};
          &:hover {
            background-color: ${theme.colors.muted};
          }
        `
      case "ghost":
        return `
          background-color: transparent;
          border: none;
          color: ${theme.colors.foreground};
          &:hover {
            background-color: ${theme.colors.muted};
          }
        `
      default:
        return `
          background-color: ${theme.colors.primary};
          border: none;
          color: ${theme.colors.primaryForeground};
          &:hover {
            background-color: ${theme.colors.primary}dd;
          }
        `
    }
  }}
  
  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return `
          height: 2rem;
          padding: 0 0.75rem;
          font-size: 0.875rem;
        `
      case "icon":
        return `
          height: 2.5rem;
          width: 2.5rem;
          padding: 0;
        `
      default:
        return `
          height: 2.5rem;
          padding: 0 1rem;
          font-size: 1rem;
        `
    }
  }}
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
`

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  margin-bottom: 0.5rem;
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const CardContent = styled.div`
  padding: 1.5rem;
`

export const CardFooter = styled.div`
  padding: 0 1.5rem 1.5rem;
`

export const TabsContainer = styled.div`
  width: 100%;
`

export const TabsList = styled.div`
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.muted};
  padding: 0.25rem;
  border-radius: ${({ theme }) => theme.radius};
`

export const TabsTrigger = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  border: none;
  background-color: ${({ $active, theme }) => ($active ? theme.colors.background : "transparent")};
  color: ${({ $active, theme }) => ($active ? theme.colors.foreground : theme.colors.mutedForeground)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`

export const TabsContent = styled.div<{ $active?: boolean }>`
  margin-top: 2rem;
  display: ${({ $active }) => ($active ? "block" : "none")};
`

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
`

