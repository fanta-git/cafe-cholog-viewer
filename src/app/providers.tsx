"use client";

import { theme } from "@/consts/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: React.ReactNode;
};

export function Providers(props: Props) {
  const { children } = props;

  const queryClient = new QueryClient();

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
