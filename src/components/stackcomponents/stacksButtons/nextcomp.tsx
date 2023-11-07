import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const Nextcomp = ({ children }: ComponentProps) => {
  return (
    <>
          <Box sx={S.constStyleNext}>{children}</Box>  
    </>
  );
};