import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  object?: string;
  children?: React.ReactNode;
};

export const Footer = ({ children }: ComponentProps) => {
  return (
    <>
      <footer>
        <Box sx={S.constanteStyle}>
          <Box>{children}</Box>
        </Box>
      </footer>
    </>
  );
};
