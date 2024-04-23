// Header.tsx
'use client'
import { Box, Flex, Heading, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ChakraProvider, Input } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
<Flex
  align="center"
  justify="space-between"
  maxH="86px"
  p={4}
  bgGradient="linear(to-r, #333333, #1a1a1a)"
  backdropFilter="blur(10px)" 
>
  <Box>
    <Flex align="center"> 
      <img src="/HARMONYLOGO.png" alt="Harmony Icon" width="90" height="90" style={{ marginRight: '8px' }} />
      <Heading as="h1" size="lg" color="#FFFFFF">
        Harmony
      </Heading>
    </Flex>
  </Box>
  <Flex align="center" flex="1" mx={10}>
    <Input
      placeholder="Rechercher des musiques..."
      variant="flushed"
      size="md"
      focusBorderColor="#47A8BD" 
      _placeholder={{ color: 'rgba(255, 255, 255, 0.7)' }}
    />
  </Flex>
  <Flex align="center">
    <NextLink href="/" passHref>
      <Button as="a" variant="ghost" backgroundColor="#47A8BD" mr={10}>
        Accueil
      </Button>
    </NextLink>
    <NextLink href="/Articles" passHref>
      <Button as="a" variant="ghost" backgroundColor="#47A8BD" mr={10}>
        Mes musiques
      </Button>
    </NextLink>
    <NextLink href="/About" passHref>
      <Button as="a" variant="ghost" backgroundColor="#47A8BD" mr={10}>
        Mon profil
      </Button>
    </NextLink>
  </Flex>
</Flex>
);

}

export function Layout({ children }) {
  return (
    <ChakraProvider>
      <Header />
      <Box p={0}>{children}</Box>
    </ChakraProvider>
  );
};
