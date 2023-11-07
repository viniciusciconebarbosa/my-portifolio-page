import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  children?: React.ReactNode;
};

export const SectionDescription = ({ children }: ComponentProps) => {
  return (
    <>
      <section>
        <Box sx={S.constanteStyle}>{children}</Box>
      </section>
    </>
  );
};
