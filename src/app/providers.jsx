"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";

import { theme } from "./styles/theme";

export function Providers({ children }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <SessionProvider>{children}</SessionProvider>
      </ChakraProvider>
    </>
  );
}
