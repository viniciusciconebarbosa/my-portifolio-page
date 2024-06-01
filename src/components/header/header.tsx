'use client'

import { Box } from "@chakra-ui/react";
import * as S from "./styles";
import { useEffect } from "react";
import { animate } from "@/functions/animate";

type ComponentProps = {
  object?: string;
  children?: React.ReactNode;
};

const Header = ({ children }: ComponentProps) => {

  useEffect(()=> {

    let target:NodeListOf<Element> = document.querySelectorAll("[data-anime]")

    animate(target)

  },[])

  return (
    <>
      <section id="anchorInicio">
        <Box  sx={S.constanteStyle}>
          <Box>{children}</Box>
        </Box>
      </section>
    </>
  );
};

export default Header;
