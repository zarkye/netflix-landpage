import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface NetflixCardProps {
  numero: number;
  img: string;
  alt: string;
}

export default function NetflixCard({ numero, img, alt }: NetflixCardProps) {
    return (
        <Box
            as="button"
            position="relative"
            w="215px"
            h="300px"
            
            border="none"
            p={0}
            cursor="pointer"
            transition="transform 0.2s ease"
            _hover={{ transform: 'scale(1.05)' }}
        >
            <Box
                w="full"
                h="full"
                borderRadius="8px"
                overflow="hidden"
                boxShadow="lg"
                position="relative"
            >
                <Image
                    src={img} 
                    alt={alt}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </Box>

            <Text
                position="absolute"
                bottom="-30px"
                left="-22px"
                fontSize="100px"
                fontFamily="'Arial Black'"
                fontWeight="900"
                color="black"
                lineHeight={2}
                textShadow="2px 2px 4px rgba(0,0,0,0.5)"
                zIndex={2}
                style={{
                    WebkitTextStroke: '2px white',
                }}
            >
                {numero}
            </Text>
        </Box>
    );
}