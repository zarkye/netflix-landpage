"use client";
import {
    HStack,
    Image as ChakraImage,
    Box,
    SelectItemGroup,
    Select,
    Portal,
    createListCollection,
    Button,
    Text,
    VStack,
    Flex,
    Heading,
    Input,
} from "@chakra-ui/react";
import NextImage from "next/image";
import netflixLogo from "../../public/assets/netflixLogo.svg";
import caretDown from "../../public/assets/caretDown.svg";
import { LuLanguages } from "react-icons/lu";
import Header from "@/components/Header/header";
import netflixBackground from "../../public/assets/netflix-background.jpg";
import { Open_Sans } from "next/font/google";

const idiomas = createListCollection({
    items: [
        { label: "Português", value: "pt" },
        { label: "English", value: "en" },
    ],
});

export default function Home() {
    return (
        <Box position="relative" w="100%" h="100vh" overflow="hidden">
            <Box
                position="absolute"
                inset={0}
                zIndex={0}
            >
                <NextImage
                    src={netflixBackground}
                    alt="plano de fundo da netflix"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />

                <Flex
                    zIndex={2}
                    position={"absolute"}
                    w="100%"
                    h="100%"
                    bgColor="blackAlpha.700/70"
                />
                <Box
                    position="absolute"
                    inset={0}
                    zIndex={1}
                    bg={`
        radial-gradient(100% 130% at 50% 150%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.3) 100%)
    `}
                />
                <Box
                    position="absolute"
                    bottom={0}
                    left="50%"
                    w="115%"
                    transform="translateX(-50%)"
                    h="85px"
                    zIndex={3}
                    borderTopLeftRadius="50% 100%"
                    borderTopRightRadius="50% 100%"
                    bg={`
        radial-gradient(40% 100% at 50% 5%, rgba(64,97,231,0.35), transparent 90%),
        black
    `}
                    bgClip="padding-box"
                    overflow="hidden"
                    _before={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "100%",
                        padding: "4px",
                        background: `
                            linear-gradient(to right,
                                rgba(33,13,22,0) 0%,
                                rgba(184,40,105,0.7) 15%,
                                rgba(229,9,20,1) 50%,
                                rgba(184,40,105,0.7) 85%,
                                rgba(33,13,22,0) 100%
                            )
                            `,
                        borderTopLeftRadius: "50% 100%",
                        borderTopRightRadius: "50% 100%",
                        clipPath: "inset(0 0 30% 0)",
                        WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                    }}
                />
            </Box>

            <Header position="absolute" top={0} zIndex={50} />

            <VStack marginX="500px" position="relative" zIndex={2} pt="345px" color="white">
                <Heading
                    fontSize={{ lg: "62px" }}
                    fontWeight="black"
                    lineHeight="80px"
                    minW="588px"
                    maxH="140px"
                    marginBottom="32px"
                    textAlign="center"
                    textWrap="balance"
                    fontFamily={"sans-serif"}
                    letterSpacing={"tighter"}
                >
                    Filmes, séries e muito mais, sem limites
                </Heading>
                <Text fontSize="20px" fontWeight="500"marginBottom="28px" fontFamily={"sans-serif"}>
                    A partir de R$ 20,90. Cancele quando quiser.
                </Text>
                <Text fontSize={"16px"} margin={0} fontFamily={"sans-serif"}>
                    Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
                </Text>
                <HStack marginTop="8px">
                    <Input
                        placeholder="Email"
                        fontWeight="700"
                        padding="24px 16px 8px 16px"
                        w="395px"
                        h="56px"
                        border="1px solid rgba(255, 255, 255, 0.3)"
                        bg="gray.950/80"
                    />
                    <Button color="#fff"bgColor="red" h="56px" w="184px" fontSize="24px" fontWeight="700" fontFamily={"sans-serif"}>
                        Vamos Lá
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
}
