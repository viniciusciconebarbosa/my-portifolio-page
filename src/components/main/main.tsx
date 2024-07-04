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
                Esta pagina foi feita utilizando nextJS 14_
              </Header>
              <SectionDescription>
                <div>
                  Essas tecnologias abaixo sao as <strong>tecnologias</strong>{" "}
                  que domino no momento.
                </div>
              </SectionDescription>

              <SectionDetails>
                <div>
                  {/*  <video loop muted autoPlay >
                  <source src='https://storage.cloud.google.com/meubucketlindao/videoplayback%20(1).mp4' type="video/mp4" /> 
                  </video> */}
                </div>
                <PictureComponent>
                  <Image className="foto" priority={true} src={perfil} alt="Picture of the author" />
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
                  <br/><br/><br/>
                  
                  <strong>Apresentação:</strong><br/><br/>

              Olá! Sou o Vinicius, um desenvolvedor web experiente e apaixonado por criar soluções inovadoras e funcionais. Minha jornada no mundo da programação começou há 2 anos, quando iniciei um bootcamp que me abriu as portas para um universo de possibilidades. Desde então, me dedico a aprimorar minhas habilidades e me mantenho em constante evolução.
              <br/><br/><br/><br/><br/>

              <strong>Habilidades e Experiência</strong><br/><br/>
              
              Criação de aplicações web com React e MUI para interfaces interativas e envolventes.
              Desenvolvimento de backends robustos com Node.js e Java para garantir a performance e escalabilidade das aplicações.
              Projetos práticos em meu repositorio disponível no GitHub em (github.com/viniciuscicone) para avaliação e análise.
              <br/><br/><br/><br/>
              <strong>Motivação e Propósito:</strong><br/><br/>

              Minha paixão reside em transformar linhas de código em soluções que façam a diferença. Acredito que a tecnologia tem o poder de conectar pessoas, otimizar processos e trazer novas perspectivas para o mundo. Essa crença me impulsiona a buscar novos desafios e me dedicar a cada projeto com entusiasmo e profissionalismo.
              <br/><br/><br/><br/>
              <strong>Diferenciais</strong>
              <br/><br/>
              <div className="myDiv">


              
              <li><strong>Visão holística:</strong> Acredito em uma abordagem completa do desenvolvimento, desde a concepção da ideia até a implementação e manutenção do projeto.
              <br/><br/></li>
                  
              
              <li><strong>Colaboração e comunicação : </strong> Me integro facilmente em equipes e me comunico de forma clara e objetiva, promovendo um ambiente de trabalho positivo e produtivo.
              </li>

              </div><br/><br/>
              <strong>Conclusão:</strong>
              <br/><br/>
              Acredito que minhas habilidades, experiência e paixão pelo desenvolvimento me tornam um profissional valioso para qualquer equipe. Se você busca um desenvolvedor dedicado, criativo e comprometido com resultados, convido você a conhecer meu trabalho e entrar em contato.


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
