"use client";

import { Section, Container, Heading, Text } from '../base';
import Image from "next/image";
import Picture from "@/assets/Picture.jpg";
import styled from "styled-components";

const AboutGrid = styled.div`

  display: grid;
  gap: ${({ theme }) => theme.space[8]};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  max-width: 280px;
  aspect-ratio: 1;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.muted};
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const ProfileImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
`;

const About = () => {
  return (
    <Section id="about" $muted>
      <Container>
        <Heading>Sobre Mim</Heading>
        <AboutGrid>
          <ImageContainer>
            <ProfileImage
              src={Picture}
              alt="Vinicius"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </ImageContainer>
          <AboutContent>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eos laboriosam quis, 
              commodi maiores consequuntur dolorum, nisi corporis vitae pariatur, laborum accusantium
               maxime magni fuga omnis. Repellendus inventore quisquam cumque.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestiae impedit 
              excepturi numquam quam aspernatur quis sequi accusantium reprehenderit aut maxime, 
              aperiam omnis beatae harum alias quae asperiores est voluptate..
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, sequi impedit 
              dolorum aliquam eius voluptates harum eaque quam provident a, ipsum exercitationem 
              alias quibusdam suscipit iusto quisquam vitae dolorem? Natus.
            </Text>
          </AboutContent>
        </AboutGrid>
      </Container>
    </Section>
  );
};

export default About;
