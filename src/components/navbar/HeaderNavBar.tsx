import { Box, Button, Heading, TagLabel } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const HeaderNavBar = ({ children }: ComponentProps) => {
  return (
    <>
      <header className="navbar">
        <Box sx={S.constanteStyle}>
          {children}
          <a href="#anchorInicio"><Button>Inicio</Button></a>
          <a href="#anchorTecnologia"><Button>Tecnologias</Button></a>
          <a href="#anchorSobre"><Button>Sobre mim</Button></a>
          <a href="#anchorContato"><Button>Contato</Button></a>
        </Box>
      </header>
    </>
  );
};
