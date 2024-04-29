import { Box, Flex, Heading, Text, useColorModeValue, SimpleGrid, Image } from '@chakra-ui/react';
import { Layout } from '../../components/layout';
import NextLink from 'next/link';

const musicData = [
  {
    id: 1,
    title: 'Album One',
    artist: 'Artist One',
    imageUrl: '../../../public/Album.jpg'
  },
  {
    id: 2,
    title: 'Album Two',
    artist: 'Artist Two',
    imageUrl: '/path/to/image2.jpg'
  },
  {
    id: 3,
    title: 'Album Three',
    artist: 'Artist Three',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 4,
    title: 'Album One',
    artist: 'Artist One',
    imageUrl: '/path/to/image1.jpg'
  },
  {
    id: 5,
    title: 'Album Two',
    artist: 'Artist Two',
    imageUrl: '/path/to/image2.jpg'
  },
  {
    id: 6,
    title: 'Album Three',
    artist: 'Artist Three',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 7,
    title: 'Album One',
    artist: 'Artist One',
    imageUrl: '/path/to/image1.jpg'
  },
  {
    id: 8,
    title: 'Album Two',
    artist: 'Artist Two',
    imageUrl: '/path/to/image2.jpg'
  },
  {
    id: 9,
    title: 'Album Three',
    artist: 'Artist Three',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 10,
    title: 'Album One',
    artist: 'Artist One',
    imageUrl: '/path/to/image1.jpg'
  },
  {
    id: 11,
    title: 'Album Two',
    artist: 'Artist Two',
    imageUrl: '/path/to/image2.jpg'
  },
  {
    id: 12,
    title: 'Album Three',
    artist: 'Artist Three',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 13,
    title: 'Album One',
    artist: 'Artist One',
    imageUrl: '/path/to/image1.jpg'
  },
  {
    id: 14,
    title: 'Album Two',
    artist: 'Artist Two',
    imageUrl: '/path/to/image2.jpg'
  },
  {
    id: 15,
    title: 'Album Three',
    artist: 'Artist Three',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 16,
    title: 'Album One',
    artist: 'Artist One',
    imageUrl: '/path/to/image1.jpg'
  },
  {
    id: 17,
    title: 'Album Two',
    artist: 'Artist Two',
    imageUrl: '/path/to/image2.jpg'
  },
  {
    id: 18,
    title: 'Album Three',
    artist: 'Artist Three',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 19,
    title: 'Album One',
    artist: 'Artist One',
    imageUrl: '/path/to/image1.jpg'
  },
  {
    id: 20,
    title: 'Album Two',
    artist: 'Artist Two',
    imageUrl: '/path/to/image2.jpg'
  },
  {
    id: 21,
    title: 'Album Three',
    artist: 'Artist Three',
    imageUrl: '/path/to/image3.jpg'
  },
  // Ajoute plus d'éléments ici...
];

function Browse() {
  return (
    <Layout>
      <Box w="full" bg="black" minH="100vh">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          p={10}
        >
          <Heading color="white" fontSize="3xl" mb={8}>
            Parcourir la Musique
          </Heading>
          <SimpleGrid columns={3} spacing={10} w="full">
            {musicData.map((music) => (
              <Box key={music.id} bgGradient="linear(to-r, #333333, #1a1a1a)" p={6} borderRadius="lg" boxShadow="xl">
                <Image src={music.imageUrl} borderRadius="md" mb={4} alt={`Image de ${music.title}`}/>
                <Heading size="md" color="white" mb={2}>{music.title}</Heading>
                <Text color="whiteAlpha.800">{music.artist}</Text>
                <NextLink href={`/music/${music.id}`} passHref>
                  <Text mt={4} as="a" color="teal.400" cursor="pointer">Écouter</Text>
                </NextLink>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Layout>
  );
}

export default Browse;
