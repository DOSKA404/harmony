
'use client'
import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import Header, { Layout } from '../../components/layout';
import NextLink from 'next/link';
import { fetchAlbums, Album } from '../api/GetAlbum/route';  // Assurez-vous que le chemin d'importation est correct

const Browse: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetchAlbums(1, 1)  // Utilisez ici les paramètres appropriés pour votre API
      .then(setAlbums)
      .catch(error => console.error('Error loading albums:', error));
  }, []);

  return (
    <Layout>
      <Header />
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
            {albums.map(album => (
              <Box key={album.Id} bgGradient="linear(to-r, #333333, #1a1a1a)" p={6} borderRadius="lg" boxShadow="xl">
                <Image src={album.imageUrl} borderRadius="md" mb={4} alt={`Image de ${album.Name}`}/>
                <Heading size="md" color="white" mb={2}>{album.Name}</Heading>
                <Text color="whiteAlpha.800">{`Artist ID: ${album.ArtisteId}`}</Text>
                <NextLink href={`/music/${album.Id}`} passHref>
                  <Text mt={4} as="a" color="teal.400" cursor="pointer">Écouter</Text>
                </NextLink>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Browse;
