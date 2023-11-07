import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const Jscomp = ({ children }: ComponentProps) => {
  return (
    <>
          <Box sx={S.constStyleJs}>{children}</Box>  
    </>
  );
};