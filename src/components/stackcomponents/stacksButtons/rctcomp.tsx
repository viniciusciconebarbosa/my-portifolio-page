import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const Rctcomp = ({ children }: ComponentProps) => {
  return (
    <>
          <Box sx={S.constStyleRct}>{children}</Box>  
    </>
  );
};