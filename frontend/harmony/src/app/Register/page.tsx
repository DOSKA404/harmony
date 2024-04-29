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
    size: 'lg', // Augmenté pour des champs de saisie plus grands
    focusBorderColor: '#47A8BD',
    _placeholder: { color: 'rgba(255, 255, 255, 0.7)' }
  };

  return (
    <Layout>
      <Center w="full" h="100vh" bg="black">
        <Box p={8} w={['90%', '70%', '50%', '40%']} maxWidth="600px" borderWidth="1px" borderRadius="lg" boxShadow="lg" bgGradient="linear(to-r, #333333, #1a1a1a)">
          <VStack spacing={8} align="center"> 
            <Heading as="h1" size="xl" color="white"> 
              Inscription
            </Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="username" color="white" fontSize="lg">Pseudo</FormLabel>
              <Input id="username" placeholder="Entrez votre pseudo" {...inputStyle} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password" color="white" fontSize="lg">Mot de passe</FormLabel>
              <Input id="password" placeholder="Entrez votre mot de passe" type="password" {...inputStyle} />
            </FormControl>
            <Button size="lg" backgroundColor="#47A8BD" mt={6} px={10}>
              S'inscrire
            </Button>
          </VStack>
        </Box>
      </Center>
    </Layout>
  );
}
