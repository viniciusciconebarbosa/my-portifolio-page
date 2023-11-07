import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const TecSection = ({ children }: ComponentProps) => {
  return (
    <>
     
        <Box data-anime="direita" sx={S.constanteStyle}>{children}</Box>
     
    </>
  );
};
