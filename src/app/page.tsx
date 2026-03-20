import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Stack,
  Container,
  Image,
} from '@chakra-ui/react';
import { LuChevronRight } from 'react-icons/lu';

export default function Home() {
  return (
    <Box position="relative" minH="100vh" overflowX="hidden">
      {/* Background Gradients (Simulando o estilo do seu HTML) */}
      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="165rem"
        h="100%"
        zIndex="-1"
        bg="radial-gradient(11% 56% at 17% 50%, #461518 0%, transparent 100%), 
            radial-gradient(11% 56% at 83% 50%, #461518 0%, transparent 100%)"
        opacity="0.6"
      />

      {/* Header */}
      <Container maxW="container.xl" h="7.5rem">
        <Flex justify="space-between" align="center" h="100%">
          <Image 
            src="/images/netflix-logo.svg" 
            alt="Netflix" 
            h={{ base: "1.5rem", md: "2.5rem" }} 
          />
          <Stack direction="row" gap={4}>
            {/* Seletor de Idioma e Botão Sign In */}
            <Button 
              bg="brand.red" 
              color="white" 
              _hover={{ bg: 'brand.darkRed' }}
              size="sm"
              px={4}
            >
              Sign In
            </Button>
          </Stack>
        </Flex>
      </Container>

      {/* Hero Section */}
      <Flex 
        direction="column" 
        align="center" 
        justify="center" 
        textAlign="center" 
        pt={{ base: "4rem", md: "8rem" }}
        px={4}
      >
        <Heading 
          as="h1" 
          fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }} 
          fontWeight="900"
          maxW="800px"
          lineHeight="1.1"
        >
          Unlimited movies, TV shows, and more
        </Heading>
        <Text fontSize={{ base: "1.2rem", md: "1.5rem" }} mt={4}>
          Starts at 29 zł. Cancel anytime.
        </Text>
        
        <Stack gap={4} mt={8} w="full" maxW="600px">
          <Text fontSize="1.2rem">
            Ready to watch? Enter your email to create or restart your membership.
          </Text>
          
          <Flex direction={{ base: "column", md: "row" }} gap={2}>
            <Input 
              placeholder="Email address" 
              bg="rgba(0,0,0,0.5)" 
              border="1px solid rgba(255,255,255,0.5)"
              h="3.5rem"
              _focus={{ border: "2px solid white" }}
            />
            <Button 
              bg="brand.red" 
              h="3.5rem" 
              px={8} 
              fontSize="1.5rem"
              
              _hover={{ bg: 'brand.darkRed' }}
            >
              Get Started
              <LuChevronRight />
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}