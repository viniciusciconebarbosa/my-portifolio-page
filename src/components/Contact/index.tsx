import styled from "styled-components"

// ============================================================
// Contact Section — Obsidian & Gold
// ============================================================

export const ContactContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space[6]};
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[6]};
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.foreground};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
`

export const Input = styled.input`
  width: 100%;
  padding: 0.625em 0.875em;
  border-radius: ${({ theme }) => theme.radii.btn};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.input};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedForeground};
    opacity: 0.6;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.625em 0.875em;
  border-radius: ${({ theme }) => theme.radii.btn};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.foreground};
  min-height: 150px;
  resize: vertical;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.input};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedForeground};
    opacity: 0.6;
  }
`
