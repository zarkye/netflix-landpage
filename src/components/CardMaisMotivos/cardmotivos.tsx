import { Box, Heading } from "@chakra-ui/react";
import NextImage from 'next/image';

interface CardMaisMotivosProps {
    title: string;
    subtitle: string;
    img: string;
    alt: string;
}

export default function CardMaisMotivos({ title, subtitle, img, alt }: CardMaisMotivosProps) {
    return (
        <Box
            display="flex"
            flex="1"
            boxSizing="border-box"
            padding={0}
        >
            <Box
                position="relative"
                display="flex"
                flexDirection="column"
                flex="1"
                overflow="hidden"
                bg="linear-gradient(149deg, #192247 0%, #210e17 96.86%)"
                borderRadius="16px"
                backdropFilter="blur(30px)"
                padding="32px 24px 128px 24px"
                minHeight="344px"
            >
                <Heading
                    as="h3"
                    margin={0}
                    padding={0}
                    fontFamily="var(--font-netflix-core)"
                    fontSize="24px"
                    fontWeight="500"
                    color="white"
                    mb="16px"
                >
                    {title}
                </Heading>

                <Box
                    as="p"
                    margin={0}
                    padding={0}
                    fontSize="16px"
                    fontFamily="var(--font-netflix-core)"
                    fontWeight="400"
                    color="rgba(255, 255, 255, 0.7)"
                    lineHeight="20px"
                >
                    {subtitle}
                </Box>

                <Box
                    position="absolute"
                    bottom="16px"
                    right="16px"
                >
                    <NextImage
                        src={img}
                        alt={alt}
                        width={72}
                        height={72}
                    />
                </Box>
            </Box>
        </Box>
    );
}