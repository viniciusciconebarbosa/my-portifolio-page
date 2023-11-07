import { Box } from "@chakra-ui/react";
import * as S from "./styles";

type ComponentProps = {
  object?: string;
  children?: React.ReactNode;
};

export const SectionDetails = ({ children }: ComponentProps) => {
  return (
    <>
      <section>
        <Box sx={S.constanteStyle}>{children}</Box>
      </section>
    </>
  );
};
