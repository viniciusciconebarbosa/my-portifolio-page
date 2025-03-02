"use client";

import * as About from "@/src/components/styled/About";
import * as Ui from "@/src/components/styled/ui";
import * as Layout from "@/src/components/styled/layout";
import Image from "next/image";
import Picture from "@/src/assets/Picture.jpg";
import styled from "styled-components";


const GradualBorderImage = styled(Image)`
  opacity: 0.6;
  border-radius: 50%;
`

export default function AboutSection() {
  return (
    <Layout.Section id="about">
      <Layout.Container>
        <Ui.SectionTitle>Sobre mim</Ui.SectionTitle>
        <About.AboutGrid>
          <About.ProfileImageContainer>
            <About.ProfileImage>
              <GradualBorderImage
                src={Picture}
                alt="Vinicius"
                quality={100}
                style={{
                  
                  // filter: "grayscale(100%)",
                  objectFit: "cover",
                  transform: "scale(1)",
                  width: "100%",
                  height: "100%",
                }}
              />
            </About.ProfileImage>
          </About.ProfileImageContainer>
          <About.AboutContent>
            <About.AboutText>
            Olá! Sou o Vinicius, um desenvolvedor web experiente e apaixonado por criar soluções inovadoras 
            e funcionais. Minha jornada no mundo da programação começou há 2 anos, quando iniciei um 
            bootcamp que me abriu as portas para um universo de possibilidades. Desde então, me dedico a 
            aprimorar minhas habilidades e mantenho-me em constante evolução.
            </About.AboutText>
            <About.AboutText>
              Minha jornada na tecnologia começou quando criei meu primeiro site. 
              Desde então, venho criando aplicativos intuitivos e de alto
              desempenho.
            </About.AboutText>
            <About.AboutText>
              Quando não estou programando, você pode me encontrar caminhando,
              lendo ficção científica ou experimentando novas receitas.
            </About.AboutText>
          </About.AboutContent>
        </About.AboutGrid>
      </Layout.Container>
    </Layout.Section>
  );
}
