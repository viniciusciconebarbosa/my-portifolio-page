import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const Tpcomp = ({ children }: ComponentProps) => {
  return (
    <>
          <Box sx={S.constStyleTp}>{children}</Box>  
    </>
  );
};