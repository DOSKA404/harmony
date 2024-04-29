'use client'
import { useState } from 'react';
import { Layout } from '../../components/layout';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Center,
  VStack,
  Text,
  Link
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const inputStyle = {
    variant: 'flushed',
    size: 'lg',
    focusBorderColor: '#47A8BD',
    _placeholder: { color: 'rgba(255, 255, 255, 0.7)' }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const data = await response.json();
      setMessage(`Welcome ${data.username}!`);
    } catch (error) {
      console.error(error);
      setMessage('Failed to login');
    }
  };

  return (
    <Layout>
      <Center w="full" h="100vh" bg="#0A0F12">
        <Box p={8} w={['90%', '70%', '50%', '40%']} maxWidth="600px" borderWidth="1px" borderRadius="lg" boxShadow="lg" bgGradient="linear(to-r, #333333, #1a1a1a)">
          <form onSubmit={handleSubmit}>
            <VStack spacing={8} align="center">
              <Heading as="h1" size="xl" color="white">
                Connexion
              </Heading>
              <FormControl isRequired>
                <FormLabel htmlFor="username" color="white" fontSize="lg">Pseudo</FormLabel>
                <Input
                  id="username"
                  placeholder="Entrez votre pseudo"
                  {...inputStyle}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password" color="white" fontSize="lg">Mot de passe</FormLabel>
                <Input
                  id="password"
                  placeholder="Entrez votre mot de passe"
                  type="password"
                  {...inputStyle}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button type="submit" size="lg" backgroundColor="#47A8BD" mt={6} px={10}>
                Se connecter
              </Button>
              <Flex mt={4} align="center" justify="center">
                <Text color="whiteAlpha.800" mr={2}>Pas de compte ?</Text>
                <NextLink href="/Register" passHref>
                  <Link color="teal.400">Inscription</Link>
                </NextLink>
              </Flex>
              {message && <Text color="red.500" mt={4}>{message}</Text>}
            </VStack>
          </form>
        </Box>
      </Center>
    </Layout>
  );
}
