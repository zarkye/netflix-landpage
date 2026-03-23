"use client";
import { useRef, useState, useEffect } from "react";
import {
    HStack,
    Box,
    Button,
    Text,
    VStack,
    Flex,
    Heading,
    Input,
    Icon,
} from "@chakra-ui/react";
import NextImage from "next/image";

import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import Header from "@/components/Header/header";
import NetflixCard from "@/components/CardRank/card";
import SaibaMais from "@/components/CardSaibaMais/saibamais";

export default function Home() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [showLeftBtn, setShowLeftBtn] = useState(false);
    const [showRightBtn, setShowRightBtn] = useState(true);

    const cards = [
        {
            numero: 1,
            img: "/assets/one-piece.jpg",
            titulo: "One Piece: A Série",
        },
        {
            numero: 2,
            img: "/assets/bridgerton.jpg",
            titulo: "Bridgerton",
        },
        {
            numero: 3,
            img: "/assets/maquina.jpg",
            titulo: "Máquina de Guerra",
        },
        {
            numero: 4,
            img: "/assets/vampire-diaries.jpg",
            titulo: "Emergência Radioativa",
        },
        {
            numero: 5,
            img: "/assets/agente-secreto.jpg",
            titulo: "The Vampire Diaries",
        },
        {
            numero: 6,
            img: "/assets/jojo.jpg",
            titulo: "bridgerton",
        },
        {
            numero: 7,
            img: "/assets/teen-wolf.jpg",
            titulo: "bridgerton",
        },
        {
            numero: 8,
            img: "/assets/salve-rosa.jpg",
            titulo: "salverosa",
        },
        {
            numero: 9,
            img: "/assets/stranger-things.jpg",
            titulo: "Stranger Things",
        },
        {
            numero: 10,
            img: "/assets/virgin-river.jpg",
            titulo: "Virgin River",
        },
    ];

    const handleScroll = () => {
        if (!carouselRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setShowLeftBtn(scrollLeft > 0);
        setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 2);
    };

    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const { clientWidth } = carouselRef.current;
            const scrollAmount =
                direction === "left" ? -clientWidth : clientWidth;
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <Box
            position="relative"
            w="100%"
            maxH="100%"
            bg="#000"
            overflowX="hidden"
        >
            <Box position="relative" w="100%" h="100vh">
                <Box position="absolute" inset={0} zIndex={0}>
                    <NextImage
                        src="/assets/netflix-background2.jpg"
                        alt="plano de fundo da netflix"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />

                    <Flex
                        zIndex={2}
                        position="absolute"
                        w="100%"
                        h="100%"
                        bgColor="blackAlpha.700/70"
                    />
                    <Box
                        position="absolute"
                        inset={0}
                        zIndex={1}
                        bg={`radial-gradient(100% 130% at 50% 150%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.3) 100%)`}
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
                        bg={`radial-gradient(30% 100% at 50% 5%, rgba(64,97,231,0.35), transparent 90%), black`}
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
                            background: `linear-gradient(to right, rgba(33,13,22,1) 0%, rgba(184,40,105,1) 15%, rgba(229,9,20,1) 50%, rgba(184,40,105,1) 85%, rgba(33,13,22,1) 100%)`,
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
                        fontFamily="var(--font-netflix-core)"
                        fontWeight={"black"}
                        lineHeight={{ base: "1.2", lg: "80px" }}
                        marginBottom="24px"
                        textWrap="balance"
                        marginTop="32px"
                    >
                        Filmes, séries e muito mais, sem limites
                    </Heading>
                    <Text
                        fontSize={{ base: "18px", lg: "20px" }}
                        fontWeight="500"
                        marginBottom="24px"
                        fontFamily="var(--font-netflix-core)"
                    >
                        A partir de R$ 20,90. Cancele quando quiser.
                    </Text>
                    <Text
                        fontSize="16px"
                        margin={0}
                        fontFamily="var(--font-netflix-light)"
                    >
                        Quer assistir? Informe seu email para criar ou reiniciar
                        sua assinatura.
                    </Text>
                    <Flex
                        mt="8px"
                        w="full"
                        maxW="665px"
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
                                fontFamily="var(--font-netflix-core)"
                                left="16px"
                                top="50%"
                                transform="translateY(-50%)"
                                fontSize="md"
                                color="rgba(255,255,255,0.7)"
                                pointerEvents="none"
                                _peerFocus={{ top: "16px", fontSize: "12px" }}
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
                            w={{ base: "full", md: "185px" }}
                            fontSize="24px"
                            fontWeight="700"
                            fontFamily="sans-serif"
                        >
                            Vamos lá
                            <Icon as={LuChevronRight} boxSize={8} />
                        </Button>
                    </Flex>
                </VStack>
            </Box>

            <Box
                bg="#000"
                position="relative"
                zIndex={50}
                w="100%"
                pb="100px"
                px={{ base: "140px", xl: "355px" }}
            >
                <SaibaMais/>

                <Text
                    fontSize="32px"
                    fontWeight="bold"
                    color="white"
                    mt="20px"
                    fontFamily="var(--font-netflix-core)"
                >
                    Em alta
                </Text>

                <Box
                    flexDirection="row"
                    position="relative"
                    w="100%"
                    h="100%"
                    top={-3}
                    left={-4}
                    zIndex={50}
                >
                    <Flex
                        position="absolute"
                        left="0"
                        top="0"
                        bottom="0"
                        w="90px"
                        bg="#000"
                        zIndex={10}
                        align="center"
                        justify="center"
                        pl="8px"
                        color="gray.300"
                        opacity={showLeftBtn ? 1 : 0}
                        visibility={showLeftBtn ? "visible" : "hidden"}
                        transform={
                            showLeftBtn ? "translateX(0)" : "translateX(-100%)"
                        }
                        transition="transform 0.5s, opacity 0.2s ease-out"
                    >
                        <Flex
                            h="120px"
                            w="24px"
                            bg="rgba(255, 255, 255, 0.1)"
                            borderRadius="8px"
                            align="center"
                            justify="center"
                            cursor="pointer"
                            onClick={() => scroll("left")}
                            _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
                        >
                            <Icon as={LuChevronLeft} boxSize={6} />
                        </Flex>
                    </Flex>

                    <HStack
                        ref={carouselRef}
                        onScroll={handleScroll}
                        w="100%"
                        gap="40px"
                        overflowX="auto"
                        overflowY="visible"
                        py="40px"
                        pl="40px"
                        pr="40px"
                        css={{
                            "&::-webkit-scrollbar": { display: "none" },
                            scrollbarWidth: "none",
                        }}
                    >
                        {cards.map((card) => (
                            <Box
                                key={card.numero}
                                flexShrink={0}
                                minW="max-content"
                            >
                                <NetflixCard
                                    numero={card.numero}
                                    img={card.img}
                                    alt={`Card ${card.titulo}`}
                                />
                            </Box>
                        ))}
                    </HStack>

                    <Flex
                        position="absolute"
                        right="0"
                        top="0"
                        bottom="0"
                        w="50px"
                        bg="#000"
                        zIndex={10}
                        align="center"
                        justify="flex-end"
                        pr="8px"
                        cursor="pointer"
                        onClick={() => scroll("right")}
                        _hover={{ color: "white" }}
                        color="gray.300"
                        opacity={showRightBtn ? 1 : 0}
                        visibility={showRightBtn ? "visible" : "hidden"}
                        transform={
                            showRightBtn ? "translateX(0)" : "translateX(100%)"
                        }
                        transition="all 0.5s ease-in-out"
                    >
                        <Flex
                            h="120px"
                            w="24px"
                            bg="rgba(255, 255, 255, 0.1)"
                            borderRadius="8px"
                            align="center"
                            justify="center"
                            _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
                        >
                            <Icon as={LuChevronRight} boxSize={6} />
                        </Flex>
                    </Flex>
                </Box>
                <Box
                    height="400px"
                    marginTop={"16px"}
                    marginBottom="64px"
                    width="100%"
                    textSizeAdjust="100%"
                >
                    <Box
                        boxSizing="border-box"
                        display="block"
                        height="auto"
                        width="100%"
                    >
                        <Box
                            alignItems="normal"
                            boxSizing="border-box"
                            display="inline-flex"
                            flexDirection="column"
                            flexWrap="wrap"
                            height="416px"
                            justifyContent={"normal"}
                            marginTop={"-16px"}
                            width="100%"
                        >
                            <Box
                                alignItems={"normal"}
                                boxSizing={"border-box"}
                                display="flex"
                                flexBasis={"auto"}
                                flexGrow={0}
                                flexShrink={1}
                                flexWrap={"wrap"}
                                height={"40px"}
                                justifyContent={"normal"}
                                marginTop={"16px"}
                                width={"100%"}
                                textSizeAdjust={"100%"}
                            >
                                <Heading as="h2"
                                    margin={0}
                                    fontSize="32px"
                                    fontWeight={"700"}
                                    fontFamily="var(--font-netflix-core)"
                                >
                                    Mais motivos para assinar
                                </Heading>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
