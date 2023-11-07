import Header from "../../components/header/header";

import { SectionDetails } from "../../components/sectionDetails/sectionDetails";
import { Box } from "@chakra-ui/react";
import * as S from "./styles";
import {
  Divisor,
  PictureComponent,
} from "../../components/pictureComponent/pictureComponent";
import Image from "next/image";
import perfil from "../../utils/perfil.png";
import insta from "../../utils/instagram.png";
import git from "../../utils/github.png";
import linke from "../../utils/linkedin.png";
import { StackComponent } from "../../components/stackcomponents/stackcomponents";
import { Tpcomp } from "../../components/stackcomponents/stacksButtons/tpcomp";
import { Rctcomp } from "../../components/stackcomponents/stacksButtons/rctcomp";
import { Nextcomp } from "../../components/stackcomponents/stacksButtons/nextcomp";
import { Jscomp } from "../../components/stackcomponents/stacksButtons/jscomp";
import { SectionDescription } from "../../components/sectionDescription/sectionDescription";
import Link from "next/link";
import { Contactme } from "../../components/sendEmail/sendEmail";
import { Contact } from "../../components/contact/contact";
import { Sobre } from "../../components/sobre/sobre";
import { Redes } from "../../components/Redes/redes";
import { TecSection } from "../tecSection/tecSection";
import { HeaderNavBar } from "../navbar/HeaderNavBar";
import { Footer } from "../footer/footer";

export default function App() {
  return (
    <>
      <section>
        <Box sx={S.constanteStyle}>
          <HeaderNavBar></HeaderNavBar>
          <Box sx={S.constanteDocStyle}>
            <h1>
              <Header>
                <div className="title">
                  <p className="text">Hi i am Vinicius! </p>
                  <div className="hand">&#128075;</div>
                </div>
                <i className="hand"></i>
                This page was made using nextJS 13_
              </Header>
              <SectionDescription>
                <div>
                  Essas tecnologias abaixo sao as <strong>tecnologias</strong>{" "}
                  que domino no momento.
                </div>
              </SectionDescription>

              <SectionDetails>
                <PictureComponent>
                  <Image src={perfil} alt="Picture of the author" />
                  <Divisor></Divisor>
                  <StackComponent>
                    <Tpcomp>Type-Script</Tpcomp>
                    <Rctcomp>ReactJS</Rctcomp>
                    <Nextcomp>NextJS</Nextcomp>
                    <Jscomp>Java-Script</Jscomp>
                  </StackComponent>
                </PictureComponent>
              </SectionDetails>
              <SectionDescription>
                <Redes>
                  <a href="http://www.instagram.com/vinicius">
                    <Image src={insta} alt="Picture of the author" />
                  </a>
                  <a href="http://www.github.com/viniciuscicone">
                    <Image src={git} alt="Picture of the author" />
                  </a>
                  <a href="https://www.linkedin.com/in/vinicius-cicone-barbosa-8673a9147/">
                    <Image src={linke} alt="Picture of the author" />
                  </a>
                </Redes>
                <div>
                  Tenho experiencia com <strong>front end </strong>e{" "}
                  <strong>back end</strong>. Possuo <i>projetos</i> nestas
                  tecnologias disponiveis e visiveis em meu repositorio voce
                  pode conferir meus projetos clicando aqui
                  <Link href={"https://github.com/viniciuscicone"}>
                    <strong> github &#128516;</strong>
                  </Link>
                  .
                </div>
                <div id="anchorSobre"></div>
                <Sobre>
                  <div>
                    <strong>Sobre mim</strong>
                  </div>
                  <br></br>
                  Sou um apaixonado por programação e tecnologia, sempre em
                  busca de desafios emocionantes e oportunidades de aprendizado
                  contínuo. Desde que mergulhei no mundo da programação, tenho
                  trilhado um caminho de constante evolução. Minha paixão por
                  transformar linhas de código em soluções funcionais e
                  criativas é o que me motiva todos os dias.
                </Sobre>
                <div id="anchorTecnologia"></div>

                <Contact>Tecnologias que domino</Contact>

                <TecSection>
                  <div>TypeScript</div> <div>JavaScript</div> <div>Java</div>
                  <div>Nodejs</div>
                  <div>MySQL</div>
                  <div>Nextjs</div> <div>Reactjs</div>
                  <div>ChakraUI</div>
                  <div>MaterialUI</div>
                  <div>JestJS</div>
                  <div>AWS</div>
                </TecSection>

                <Contact>Envie-me uma mensagem !</Contact>
                <Contactme></Contactme>
              </SectionDescription>
              <Footer>
                Todos os direitos reservados !<br></br>Powered by nextJS
              </Footer>
            </h1>
          </Box>
        </Box>
      </section>
    </>
  );
}
