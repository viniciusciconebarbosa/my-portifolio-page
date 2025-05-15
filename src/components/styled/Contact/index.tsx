import styled from "styled-components"

export const ContactContainer = styled.div`
  max-width: 32rem;
  margin: 0 auto;
`

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.025em;
  opacity: 0.9;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 2px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.5;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 2px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  min-height: 150px;
  resize: vertical;
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.5;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.5;
  }
`

