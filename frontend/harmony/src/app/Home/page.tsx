// Home.tsx
import Header, { Layout } from '../../components/layout';
import { Box, Flex, Heading, Text, useColorModeValue, SimpleGrid, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

function Home() {
  
  return (
    <Layout>
      <Header />
      <Box w="full" h="100vh" bg="#0A0F12">
        <Flex
          direction="column"
          h="full"
          w="full"
          alignItems="center"
          justifyContent="space-between" 
          p={6}
        >
          <Box>
            <Heading mb={5} color="white" fontSize="4xl"> 
              Bienvenue sur Harmony
            </Heading>
            <Heading mb={10} color="white" fontSize="4xl">
              The music in your skin
            </Heading>
          </Box>
          <SimpleGrid columns={3} spacing={10} w="full">
            <Box bgGradient="linear(to-r, #333333, #1a1a1a)" p={10} borderRadius="lg" boxShadow="xl">
              <Heading mb={2} size="md" color="white">Artiste</Heading>
              <Text color="whiteAlpha.800">Découvrez des artistes de tous genres et horizons.</Text>
              <NextLink href="/Music" passHref>
                <Text mt={4} as="a" color="teal.400" cursor="pointer">Explorer les artistes</Text>
              </NextLink>
            </Box>
            <Box bgGradient="linear(to-r, #333333, #1a1a1a)" p={10} borderRadius="lg" boxShadow="xl">
              <Heading mb={2} size="md" color="white">Musique</Heading>
              <Text color="whiteAlpha.800">Parcourez notre vaste bibliothèque musicale.</Text>
              <NextLink href="/Music" passHref>
                <Text mt={4} as="a" color="teal.400" cursor="pointer">Écouter maintenant</Text>
              </NextLink>
            </Box>
            <Box bgGradient="linear(to-r, #333333, #1a1a1a)" p={10} borderRadius="lg" boxShadow="xl">
              <Heading mb={2} size="md" color="white">Album</Heading>
              <Text color="whiteAlpha.800">Trouvez les derniers albums de vos artistes préférés.</Text>
              <NextLink href="/Music" passHref>
                <Text mt={4} as="a" color="teal.400" cursor="pointer">Voir les albums</Text>
              </NextLink>
            </Box>
          </SimpleGrid>
          <Text color="whiteAlpha.800" p={4} mb={36} textAlign="center" fontSize="sm">
            © COPYRIGHT HARMONY 2024. All Rights Reserved.
          </Text>
        </Flex>
      </Box>
    </Layout>
  );
}

export default Home;
