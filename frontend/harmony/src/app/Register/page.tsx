// Register.tsx
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
  useColorModeValue,
  VStack
} from '@chakra-ui/react';

export default function Register() {
  const inputStyle = {
    variant: 'flushed',
    size: 'md',
    focusBorderColor: '#47A8BD',
    _placeholder: { color: 'rgba(255, 255, 255, 0.7)' }
  };

  return (
    <Layout>
      <Center w="full" h="100vh" bg="black">
        <Box p={8} maxW="400px" borderWidth="1px" padding='100px' borderRadius="lg" boxShadow="lg" bgGradient="linear(to-r, #333333, #1a1a1a)">
          <VStack spacing={4} align="center">
            <Heading as="h1" size="xl" color="white">
              Inscription
            </Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="username" color="white">Pseudo</FormLabel>
              <Input id="username" placeholder="Entrez votre pseudo" {...inputStyle} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password" color="white">Mot de passe</FormLabel>
              <Input id="password" placeholder="Entrez votre mot de passe" type="password" {...inputStyle} />
            </FormControl>
            <Button backgroundColor="#47A8BD" mt={4}>S'inscrire</Button>
          </VStack>
        </Box>
      </Center>
    </Layout>
  );
}
