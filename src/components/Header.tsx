"use client";

import { REPOSITORY_URL, SITE_NAME } from "@/consts/page";
import { Box, Container, HStack, Heading, Link, Mark, Spacer, useHighlight } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  const chunks = useHighlight({
    text: SITE_NAME,
    query: ["Kiite", "Cafe"]
  });

  return (
    <Box as={"header"} color={"header.text"} bgColor={"header.bg"}>
      <Container maxW="container.lg">
        <HStack h={14}>
          <Heading as="h1" fontSize="2xl" cursor="pointer">
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
              {chunks.map(({ text }, i) => (
                <Mark key={i} color={getMarkColor(text)}>
                  {text}
                </Mark>
              ))}
            </Link>
          </Heading>
          <Spacer />
          <Link as={NextLink} href={REPOSITORY_URL} _hover={{ color: "header.hover" }}>
            GitHub
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}

function getMarkColor (text: string) {
  switch (text) {
    case "Kiite":
      return "header.kiite";
    case "Cafe":
      return "header.cafe";
    default:
      return "header.text";
  }
}
