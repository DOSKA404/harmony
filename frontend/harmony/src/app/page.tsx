
import { Layout } from '../components/layout';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jersey+25&display=swap" rel="stylesheet" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

 MyApp;


function Home() {
  return (
    <Layout>
      <Box w="full" h="100vh" bg="#000000"> 
        <Flex
          direction="row"
          h="full"
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="4xl" fontWeight="bold" mr="100" mb="150">
            La simplicité et le style en un site
          </Text>
        </Flex>
      </Box>
    </Layout>
  );
}

export default Home;
