import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const PictureComponent = ({ children }: ComponentProps) => {
  return (
    <>
      <Box sx={S.constantePicture}>{children}</Box>  
    </>
  );
};

export const Divisor = ({ children }: ComponentProps) => {
  return (
    <>
      <Box sx={S.constanteDivisor}>{children}</Box>  
    </>
  );
};