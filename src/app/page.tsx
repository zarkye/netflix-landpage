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
    Icon,
} from "@chakra-ui/react";
import NextImage from "next/image";
import netflixLogo from "../../public/assets/netflixLogo.svg";
import caretDown from "../../public/assets/caretDown.svg";
import {
    LuArrowRight,
    LuArrowRightToLine,
    LuChevronRight,
    LuLanguages,
} from "react-icons/lu";
import Header from "@/components/Header/header";
import netflixBackground2 from "../../public/assets/netflix-background2.jpg";
import { Open_Sans } from "next/font/google";

export default function Home() {
    return (
        <Box position="relative" w="100%" h="100vh" overflowX="hidden">
            <Box position="absolute" inset={0} zIndex={0}>
                <NextImage
                    src={netflixBackground2}
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
                    //esse bg é o glow azul em baixo da linha vermelha curvada
                    bg={` 
        radial-gradient(30% 100% at 50% 5%, rgba(64,97,231,0.35), transparent 90%), 
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

            <VStack
                w="full"
                maxW="800px"
                mx="auto"
                position="relative"
                zIndex={2}
                pt={{ base: "100px", lg: "300px" }}
                px="20px"
                color="white"
                textAlign="center"
            >
                <Heading
                    fontSize={{ base: "32px", md: "48px", lg: "62px" }}
                    fontWeight="black"
                    lineHeight={{ base: "1.2", lg: "80px" }}
                    marginBottom="24px"
                    textWrap="balance"
                    fontFamily="sans-serif"
                    letterSpacing="tighter"
                    marginTop="32px"
                >
                    Filmes, séries e muito mais, sem limites
                </Heading>

                <Text
                    fontSize={{ base: "18px", lg: "20px" }}
                    fontWeight="600"
                    marginBottom="24px"
                    fontFamily="sans-serif"
                >
                    A partir de R$ 20,90. Cancele quando quiser.
                </Text>

                <Text fontSize="16px" margin={0} fontFamily="sans-serif">
                    Quer assistir? Informe seu email para criar ou reiniciar sua
                    assinatura.
                </Text>

                <Flex
                    mt="8px"
                    w="665px"
                    flexDir={{ base: "column", md: "row" }}
                    gap="10px"
                    align="center"
                >
                    <Box position="relative" w="100%">
                        <Input
                            placeholder=" "
                            className="peer"
                            fontWeight="600"
                            color="rgba(255, 255, 255, 0.8)"
                            type="email"
                            fontSize="md"
                            h="56px"
                            border="1px solid rgba(255, 255, 255, 0.3)"
                            bg="rgba(24, 23, 21, 0.6)"
                            boxShadow="0 0 30px rgba(109, 99, 95, 0.1)"
                            paddingX="16px"
                            paddingTop="24px"
                            paddingBottom="8px"
                            _focus={{
                                outline: "2px solid white",
                                outlineOffset: "2px",
                            }}
                        />

                        <Text
                            position="absolute"
                            left="16px"
                            top="50%"
                            transform="translateY(-50%)"
                            fontSize="md"
                            color="rgba(255,255,255,0.7)"
                            pointerEvents="none"
                            fontWeight="500"
                            _peerFocus={{
                                top: "16px",
                                fontSize: "12px",
                            }}
                            _before={{
                                ".peer:not(:placeholder-shown) + &": {
                                    top: "16px",
                                    fontSize: "12px",
                                },
                            }}
                        >
                            Email
                        </Text>
                    </Box>
                    <Button
                        color="#fff"
                        bgColor="red"
                        h="56px"
                        px="30px"
                        w="185px"
                        fontSize="24px"
                        fontWeight="700"
                        fontFamily="sans-serif"
                        _hover={{ bg: "red.600" }}
                    >
                        Vamos Lá
                        <Icon as={LuChevronRight} boxSize={8} />
                    </Button>
                </Flex>
            </VStack>
            <Box pt={200} px={355}>
                <VStack pt={200} bgColor={"black"} justifyContent={"flex-start"} align={"start"} zIndex={10} w="100%" h="100vh">
                    <Text fontSize="32px" fontWeight="bold">Em alta</Text>
                </VStack>
            </Box>
        </Box>
    );
}
