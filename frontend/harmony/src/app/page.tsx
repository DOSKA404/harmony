// Home.tsx
import { Layout } from '../components/layout';
import { Box, Flex, Heading, Text, useColorModeValue, SimpleGrid, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

function Home() {
  
  return (
    <Layout>
      <Box w="full" h="100vh" bg="black">
        <Flex
          direction="column"
          h="full"
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Heading mb={10} color="white" fontSize="4xl">
          The music in your skin
          </Heading>
          <SimpleGrid columns={3} spacing={10} w="full" px={10} py={5}>
            <Box bgGradient="linear(to-r, #333333, #1a1a1a)" p={10} borderRadius="lg" boxShadow="xl">
              <Image src="/artist-bg.jpg" alt="Artist Background" borderRadius="lg" mb={4} />
              <Heading mb={2} size="md" color="white">Artiste</Heading>
              <Text color="whiteAlpha.800">Découvrez des artistes de tous genres et horizons.</Text>
              <NextLink href="/artists" passHref>
                <Text mt={4} as="a" color="teal.400" cursor="pointer">Explorer les artistes</Text>
              </NextLink>
            </Box>
            <Box bgGradient="linear(to-r, #333333, #1a1a1a)" p={10} borderRadius="lg" boxShadow="xl">
              <Image src="/music-bg.jpg" alt="Music Background" borderRadius="lg" mb={4} />
              <Heading mb={2} size="md" color="white">Musique</Heading>
              <Text color="whiteAlpha.800">Parcourez notre vaste bibliothèque musicale.</Text>
              <NextLink href="/music" passHref>
                <Text mt={4} as="a" color="teal.400" cursor="pointer">Écouter maintenant</Text>
              </NextLink>
            </Box>
            <Box bgGradient="linear(to-r, #333333, #1a1a1a)" p={10} borderRadius="lg" boxShadow="xl">
              <Image src="/album-bg.jpg" alt="Album Background" borderRadius="lg" mb={4} />
              <Heading mb={2} size="md" color="white">Album</Heading>
              <Text color="whiteAlpha.800">Trouvez les derniers albums de vos artistes préférés.</Text>
              <NextLink href="/albums" passHref>
                <Text mt={4} as="a" color="teal.400" cursor="pointer">Voir les albums</Text>
              </NextLink>
            </Box>
          </SimpleGrid>
        </Flex>
      </Box>
    </Layout>
  );
}

export default Home;
