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

export default function Home() {
    // === ESTADOS E REFERÊNCIAS DO CARROSSEL ===
    const carouselRef = useRef<HTMLDivElement>(null);
    const [showLeftBtn, setShowLeftBtn] = useState(false);
    const [showRightBtn, setShowRightBtn] = useState(true);

    // Array falso apenas para gerar 10 cards e testarmos a rolagem
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Função que checa a posição da rolagem para esconder/mostrar os botões
    const handleScroll = () => {
        if (!carouselRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        // Se scrollLeft for maior que 0, tem conteúdo para a esquerda
        setShowLeftBtn(scrollLeft > 0);
        
        // Se a soma do scroll + tamanho da tela for menor que o tamanho total, tem conteúdo para a direita
        // A margem de "- 2" previne bugs de arredondamento de pixels em algumas telas
        setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 2);
    };

    // Função que faz o elemento rolar para o lado ao clicar no botão
    const scroll = (direction: "left" | "right") => {
        if (carouselRef.current) {
            // Pega a largura visível da tela atual para rolar exatamente uma "página" de cards por clique
            const { clientWidth } = carouselRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    // Usamos um useEffect para checar os botões logo que a página carrega
    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <Box position="relative" w="100%" minH="100vh" bg="black" overflowX="hidden">
            
            {/* === SEÇÃO HERO === */}
            <Box position="relative" w="100%" h="100vh">
                <Box position="absolute" inset={0} zIndex={0}>
                    <NextImage
                        src="/assets/netflix-background2.jpg"
                        alt="plano de fundo da netflix"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    <Flex zIndex={2} position="absolute" w="100%" h="100%" bgColor="blackAlpha.700/70" />
                    <Box position="absolute" inset={0} zIndex={1} bg={`radial-gradient(100% 130% at 50% 150%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.3) 100%)`} />
                    
                    {/* Curva Vermelha e Azul */}
                    <Box
                        position="absolute" bottom={0} left="50%" w="115%" transform="translateX(-50%)" h="85px" zIndex={3}
                        borderTopLeftRadius="50% 100%" borderTopRightRadius="50% 100%" bg={`radial-gradient(30% 100% at 50% 5%, rgba(64,97,231,0.35), transparent 90%), black`} bgClip="padding-box" overflow="hidden"
                        _before={{
                            content: '""', position: "absolute", top: 0, left: 0, right: 0, height: "100%", padding: "4px",
                            background: `linear-gradient(to right, rgba(33,13,22,1) 0%, rgba(184,40,105,1) 15%, rgba(229,9,20,1) 50%, rgba(184,40,105,1) 85%, rgba(33,13,22,1) 100%)`,
                            borderTopLeftRadius: "50% 100%", borderTopRightRadius: "50% 100%", clipPath: "inset(0 0 30% 0)",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude",
                        }}
                    />
                </Box>

                <Header position="absolute" top={0} zIndex={50} />

                {/* Textos Principais */}
                <VStack
                    w="full" maxW="800px" mx="auto" position="relative" zIndex={2} pt={{ base: "100px", lg: "300px" }} px="20px" color="white" textAlign="center"
                >
                    <Heading fontSize={{ base: "32px", md: "48px", lg: "62px" }} fontWeight="black" lineHeight={{ base: "1.2", lg: "80px" }} marginBottom="24px" textWrap="balance" fontFamily="sans-serif" letterSpacing="tighter" marginTop="32px">
                        Filmes, séries e muito mais, sem limites
                    </Heading>
                    <Text fontSize={{ base: "18px", lg: "20px" }} fontWeight="600" marginBottom="24px" fontFamily="sans-serif">
                        A partir de R$ 20,90. Cancele quando quiser.
                    </Text>
                    <Text fontSize="16px" margin={0} fontFamily="sans-serif">
                        Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
                    </Text>
                    <Flex mt="8px" w="full" maxW="665px" flexDir={{ base: "column", md: "row" }} gap="10px" align="center">
                        <Box position="relative" w="100%">
                            <Input placeholder=" " className="peer" fontWeight="600" color="rgba(255, 255, 255, 0.8)" type="email" fontSize="md" h="56px" border="1px solid rgba(255, 255, 255, 0.3)" bg="rgba(24, 23, 21, 0.6)" boxShadow="0 0 30px rgba(109, 99, 95, 0.1)" paddingX="16px" paddingTop="24px" paddingBottom="8px" _focus={{ outline: "2px solid white", outlineOffset: "2px" }} />
                            <Text position="absolute" left="16px" top="50%" transform="translateY(-50%)" fontSize="md" color="rgba(255,255,255,0.7)" pointerEvents="none" fontWeight="500" _peerFocus={{ top: "16px", fontSize: "12px" }} _before={{ ".peer:not(:placeholder-shown) + &": { top: "16px", fontSize: "12px" } }}>
                                Email
                            </Text>
                        </Box>
                        <Button color="#fff" bgColor="red" h="56px" px="30px" w={{ base: "full", md: "185px" }} fontSize="24px" fontWeight="700" fontFamily="sans-serif">
                            Vamos Lá
                            <Icon as={LuChevronRight} boxSize={8} />
                        </Button>
                    </Flex>
                </VStack>
            </Box>

            {/* === SEÇÃO EM ALTA COM CARROSSEL === */}
            {/* Note que removi os paddings das laterais da Box pai para a lista poder encostar nas bordas */}
            <Box position="relative" zIndex={50} w="100%" pb="100px" pl={{ base: "20px", xl: "120px" }}>
                <Text fontSize="32px" fontWeight="bold" color="white" mt="20px" mb="16px">
                    Em alta
                </Text>

                <Box position="relative" w="100%">
                    {/* Botão Esquerdo (Fica invisível se não tiver como voltar) */}
                    {showLeftBtn && (
                        <Flex
                            position="absolute" left={0} top={0} bottom={0} w="50px" bg="blackAlpha.700" zIndex={10} align="center" justify="center" cursor="pointer"
                            onClick={() => scroll("left")}
                            _hover={{ bg: "blackAlpha.800", color: "white" }} color="gray.300"
                        >
                            <Icon as={LuChevronLeft} boxSize={10} />
                        </Flex>
                    )}

                    {/* Container com scroll nativo oculto */}
                    <HStack
                        ref={carouselRef}
                        onScroll={handleScroll}
                        w="100%"
                        gap="20px"
                        overflowX="auto"
                        // O CSS abaixo esconde a barra de rolagem feia do navegador (funciona em Chrome, Safari e Firefox)
                        css={{
                            "&::-webkit-scrollbar": { display: "none" },
                            scrollbarWidth: "none",
                        }}
                    >
                        {/* Map para gerar os 10 cards */}
                        {cards.map((numero) => (
                            <Box key={numero} minW="max-content">
                                <NetflixCard numero={numero} img="/assets/one-piece.jpg" alt={`Card ${numero}`} />
                            </Box>
                        ))}
                    </HStack>

                    {/* Botão Direito (Fica invisível quando chega no fim) */}
                    {showRightBtn && (
                        <Flex
                            position="absolute" right={0} top={0} bottom={0} w="50px" bg="blackAlpha.700" zIndex={10} align="center" justify="center" cursor="pointer"
                            onClick={() => scroll("right")}
                            _hover={{ bg: "blackAlpha.800", color: "white" }} color="gray.300"
                        >
                            <Icon as={LuChevronRight} boxSize={10} />
                        </Flex>
                    )}
                </Box>
            </Box>
            
        </Box>
    );
}