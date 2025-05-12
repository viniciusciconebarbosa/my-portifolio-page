import styled from "styled-components"

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ProfileImage = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;

  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.primary};
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
`

