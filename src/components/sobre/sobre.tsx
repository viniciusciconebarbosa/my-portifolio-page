
import { Box } from "@chakra-ui/react";
import * as S from "./styles";
import './style.css'
type ComponentProps = {
  children?: React.ReactNode;
};

export const Sobre = ({ children }: ComponentProps) => {

  return (
    <>
      <section>
        <Box data-anime="esquerda" className="sobre" sx={S.constanteStyle}>{children}</Box>
      </section>
    </>
  );
};
