import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const StackComponent = ({ children }: ComponentProps) => {
  return (
    <>
          <Box sx={S.constanteStyle}>{children}</Box>  
    </>
  );
};