import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const Contact = ({ children }: ComponentProps) => {
  return (
    <>
      <section>
        <Box sx={S.constanteStyle}>
          <Box>{children}</Box>
        </Box>
      </section>
    </>
  );
};
