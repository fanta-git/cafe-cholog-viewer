"use client";

import { theme } from "@/consts/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import getQueryClient from "./getQueryClient";

type Props = {
  children: React.ReactNode;
};

export function Providers(props: Props) {
  const { children } = props;

  const [queryClient] = useState(getQueryClient);

  return (
    <CacheProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
