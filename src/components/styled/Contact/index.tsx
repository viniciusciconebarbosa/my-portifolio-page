import styled from "styled-components"

export const ContactContainer = styled.div`
  max-width: 28rem;
  margin: 0 auto;
`

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.input};
  background-color: ${({ theme }) => theme.colors.background};
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.input};
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 120px;
  resize: vertical;
`

