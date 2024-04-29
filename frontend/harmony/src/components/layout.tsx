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
      <NextLink href="/Home" passHref>
        <Heading as="h1" size="lg" color="#FFFFFF">
          Harmony
        </Heading>
      </NextLink>
    </Flex>
  </Box>
  <Flex align="center" flex="1" mx={20}>
    <Input
      placeholder=" musiques, albums, artistes..."
      variant="flushed"
      size="sm"
      focusBorderColor="teal.800"
      _placeholder={{ color: 'rgba(255, 255, 255, 0.7)' }}
    />
  </Flex>
  <Flex align="center">
    <NextLink href="/Browse" passHref>
      <Button
        as="a"
        size="md"
        backgroundColor="teal.700"
        color="white"
        _hover={{ backgroundColor: "teal.800" }}
        _active={{ backgroundColor: "teal.900" }}
        mr={4}
      >
        Parcourir
      </Button>
    </NextLink>
    <NextLink href="/Register" passHref>
      <Button
        as="a"
        size="md"
        backgroundColor="teal.700"
        color="white"
        _hover={{ backgroundColor: "teal.800" }}
        _active={{ backgroundColor: "teal.900" }}
        mr={4}
      >
        Mon Profil
      </Button>
    </NextLink>
    <NextLink href="/" passHref>
      <Button
        as="a"
        size="md"
        backgroundColor="teal.700"
        color="white"
        _hover={{ backgroundColor: "teal.800" }}
        _active={{ backgroundColor: "teal.900" }}
        mr={4}
      >
        Déconnexion
      </Button>
    </NextLink>
  </Flex>
</Flex>
  );

}

export function Layout({ children }) {
  return (
    <ChakraProvider>
      
      <Box p={0}>{children}</Box>
    </ChakraProvider>
  );
};
