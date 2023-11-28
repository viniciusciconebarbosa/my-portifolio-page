"use client";

import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
      back: "#313344",
      bg: "#cecece"
    },
    tecColor: {
      typeScript: "#22558f",
      reactjs: "#559da9",
      javaScript: "#9d8d24",
      nextjs: "#1c1c1c",
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#e6e6e6",
      },
    },
  },
});
