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
    Link as ChakraLink,
} from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import Header from "@/components/Header/header";
import NetflixCard from "@/components/CardRank/card";
import SaibaMais from "@/components/CardSaibaMais/saibamais";
import CardMaisMotivos from "@/components/CardMaisMotivos/cardmotivos";
import FaqItem from "@/components/FaqItem/faqitem";
import EmailInput from "@/components/EmailInput/emailinput";
import FooterListItem from "@/components/FooterListItem/footerli";
import LanguageSelector from "@/components/LanguageSelect/languageselect";
import CookieBanner from "@/components/CookieBanner/cookiebanner";

export default function Home() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [showLeftBtn, setShowLeftBtn] = useState(false);
    const [showRightBtn, setShowRightBtn] = useState(true);

    const [showKnowMore, setShowKnowMore] = useState(false);

    const cards = [
        {
            numero: 1,
            img: "/assets/peaky-blinders.jpg",
            titulo: "Peaky Blinders",
            imgBanner:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ8QSgG3yzzjGwUJpDgr5WsWBWFOPPN7ZYWcYd5FXp-Hr3KluQVFgFmIjVgWO5t7oOqazyozOuaUWzdutOMo17L9oaLAw9JkJ9PD.webp?r=2c8",
            sinopse:
                "Após o envolvimento do filho em um complô nazista, o gângster Tommy Shelby precisa deixar o exílio e voltar a Birmingham para salvar a família e a nação.",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABVLapkJ883m7BlO1e25wiKkQ1Qv4zTGS8FtlJosRs-vb0SwbRwIeSgP-oit1oW2l21j2izCWviqtl-2nDSAE4alUUKr_Jlq3rA.webp?r=2af",
            tags: ["2026", "A18", "Filme", "Dramas"],
        },
        {
            numero: 2,
            img: "/assets/bts.jpg",
            titulo: "BTS",
            sinopse:
                "O BTS faz um retorno grandioso para celebrar o novo álbum com uma performance ao vivo. Direto da histórica praça Gwanghwamun, em Seul. (Ao vivo em coreano.)",
            imgBanner:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcMbZ130D-ROcTxYn74Pe8al5_DSpy5Gte4nd13I6lBdXsdcC-5PLO9KKRrNYs0MOZAgVHI0utoz-2OZ5zArkNwyR-QRrYc3nDJk.webp?r=6ca",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABSBKuAxJU-_lDr-9Xb2jbfSzX6GfOE6gFDUlLJRpdRSR4MJtrNUHTmv_KT64Iy8VX0Cp2tvtkKsOgTm25zJVI5PjK-Y9GcVA_Q.webp?r=93c",
            tags: ["2026", "A10", "Série", "Música"],
        },
        {
            numero: 3,
            img: "/assets/one-piece.jpg",
            titulo: "One Piece",
            imgBanner: "/assets/one-piece-banner.jpg",
            sinopse:
                "O jovem pirata Monkey D. Luffy veste o chapéu de palha e, com sua tripulação atrapalhada, zarpa em uma jornada épica nesta adaptação em live-action do popular mangá.",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABQzPDXkx_1QVU3ASHuwDuQa5S-0oVfSfqCcIHjaPVEtAAa1AbhzSKHwJrRpxSp6P3VSxfHkyZx_DJJA1a5hqCE-qfxiUQuFVVw.webp?r=8da",
            tags: ["2026", "16", "Série", "Ação", "Fantasia", "Aventura"],
        },
        {
            numero: 4,
            img: "/assets/bridgerton.jpg",
            titulo: "Bridgerton",
            sinopse:
                "Em um novo capítulo da alta sociedade britânica, o solteirão convicto Benedict Bridgerton finalmente encontra o amor: uma criada encantadora em um baile de máscaras.",
            imgBanner:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSJJYApE5XnftG11IjDspV3_t7VzmnuDJk3UrBAXO6Tbzc2Lmi6FNaKV9VWjX5s7BbCSdGM92lWon3BPpvfnr7DiwtmJMzDWXfll.webp?r=986",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABQDwgNRA7wQxYT2nHOmQAcLj_F8hUSTPPuPipfFUlF_Imu1bgf8o93TuduY-6k4S020TIbF5XbMZ0_FhgGnc9IhtK0u34tSkyQ.webp?r=1b2",
            tags: ["2026", "16", "Série", "Romance", "Dramas"],
        },
        {
            numero: 5,
            img: "/assets/maquina.jpg",
            titulo: "Máquina de Guerra",
            sinopse:
                "Em sua última missão de treinamento, um engenheiro de combate precisa liderar sua equipe de elite em uma luta pela sobrevivência contra uma máquina mortal.",
            imgBanner:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVOvU1ktrDd1PnKdMc4yapTA5FWLOM8vVJKsyCQrvZoJNNrgjSiue1KuN4LQQE5m-jXYxXBPPmSHQrJS9EZPYHIfGkjeyRkS6148.webp?r=e8c",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABUc1EA02hlbXwaBpfznjx6Xhv5GheeI6PmRRIyWdocTqQIIfLOGzOvo_vGKFRrAwPC7T480lTH4z0BDLw49L6Ej_Y46J9S2tnA.webp?r=bd1",
            tags: ["2026", "A16", "Filme", "Ação", "Ficção Científica"],
        },
        {
            numero: 6,
            img: "/assets/vampire-diaries.jpg",
            titulo: "Vampire Diaries",
            sinopse:
                "Presos em corpos adolescentes, os irmãos vampiros rivais Stefan e Damon lutam pelo amor da cativante Elena.",
            imgBanner:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbOuFdty56hlNBMkvjrlV9eXtaF0kkWLnoflGxa0HbG9mDv5kp7pUcbgyONGAW5AJaPDiuFpON2s6IQ0vkSvvRyROh_5h7f28vwW.webp?r=e1f",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABQeYzYjWv2ELJlNcyCwaVPLMEG82C2iHPBcfIjSSEvgnur1wOC-CWFbG3f8E5JUPW2abMOgS7r7wZjjucoAFCV4vEqGhpxEHPQ.webp?r=9f8",
            tags: ["2016", "16", "Série", "Fantasia", "Dramas"],
        },
        {
            numero: 7,
            img: "/assets/agente-secreto.jpg",
            titulo: "Agente Secreto",
            sinopse:
                "Perseguido por um inimigo poderoso, um homem que esconde um segredo desaparece na multidão durante a ditadura militar no país.",
            imgBanner:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdsdjIVgG4c9MMbn15NyPfUFs5zeV84ew2sABZklt7NF1zZ9iI5jAewadey7OFZ1g4Sm7iLRU-gAKFSjepvJ0UDdiQSG1UGkH5yh.webp?r=e56",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABQVuY4ZDjNBXQs1lPxCtYrc0U7CXcUoDzaY0X3Y7blhe3Y8UVF4gPocY3ZekctAe0xMoAPjI1XYbRnmSXD_AgX3Ka1CfuAYpug.webp?r=3cf",
            tags: ["2026", "16", "Filme", "Suspenses", "Dramas"],
        },
        {
            numero: 8,
            img: "/assets/teen-wolf.jpg",
            titulo: "Teen Wolf",
            sinopse:
                "Mordido por um animal, um adolescente vira um lobisomem com habilidades sobrenaturais que o tornam um atleta famoso – e complicam a vida dele.",
            imgBanner:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABU0JBfPS2LckX9ZOK4Bb-N4FAsvyjdCJx44PjYOLBJYRswQyomtrKWyyDf2r5VuqiDlGGLg3ONIyPoF4X_zaCO7UysZNA4yWmV27.webp?r=a8c",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABXKEF7bF7nIfDLADp_2_jNd-GX56O3BMg-zCTzID24L47y7kf2q45SR_bHySLVg2-K9sTa1iFVYYtooFj7w6EHiUoO5KPvnzf08.webp?r=d75",
            tags: ["2016", "16", "Série", "Terror", "Ação", "Dramas"],
        },
        {
            numero: 9,
            img: "/assets/emergencia-radioativa.jpg",
            titulo: "Emergência Radioativa",
            sinopse:
                "Inspirada em eventos reais, esta série acompanha físicos e médicos em uma corrida contra o tempo para conter um desastre radiológico e salvar milhares de vidas.",
            imgBanner:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa3fQDQ-tre29DHwQrwh7AGpIXVQV6HmtYoXffTgtoPu1FONxBpbWo9joZCa9C-5OhaTff4m_jMwRogGzNkgz6WY6Pum3xyxpj5H.webp?r=3aa",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABRYAs0qiYb7RpS-tqzbOIILl_kPT_KsQC9OlZNorHfrTCSbjHY-sVccCqxebBn1vXQ219StnhEWVse2FMw4rLWFHlRSK_7w4vA.webp?r=1e1",
            tags: ["2026", "A12", "Série", "Suspenses", "Dramas"],
        },
        {
            numero: 10,
            img: "/assets/salve-rosa.jpg",
            titulo: "#SALVEROSA",
            sinopse:
                "Depois de um incidente na escola, uma influencer adolescente começa a questionar sua identidade online e descobre segredos que colocam sua vida em risco.",
            imgBanner:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUmbR-ZjnZ-YnkaypDP6Z2mmb_xhPDQB4ywrIOpkaXOhvY_Fn_MV9Aqhh-vPk1vYNaKiL9f-MeT28DoHuUHAU9RDsGsyzTtB2GaW.webp?r=a27",
            cardTitle:
                "https://occ-0-5547-1123.1.nflxso.net/dnm/api/v6/S4oi7EPZbv2UEPaukW54OORa0S8/AAAABcLWT0Dfq1A4sGAmbFfsXGOQEjWX4YOcwCItsdJsawsKxTdputp8aF5A-Z7RvfrQ7tvkdCD5MBGctMRuj9twI_K4PYze2MgHfg.webp?r=148",
            tags: ["2025", "16", "Filme", "Suspenses", "Dramas"],
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
                direction === "left" ? -clientWidth : clientWidth - 250;
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
                        bottom={-1}
                        left="50%"
                        w="115%"
                        transform="translateX(-50%)"
                        h="78px"
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
                            background: `linear-gradient(
                                to right, 
                                transparent 0%, 
                                rgba(33,13,22,0.8) 6%, 
                                rgba(184,40,105,1) 40%, 
                                rgba(229,9,20,1) 50%, 
                                rgba(184,40,105,1) 70%, 
                                rgba(33,13,22,1) 90%, 
                                transparent 100%
                                )`,
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
                    pt={{ base: "100px", lg: "315px" }}
                    px="20px"
                    color="white"
                    textAlign="center"
                >
                    <Heading
                        fontSize={{ base: "32px", md: "48px", lg: "64px" }}
                        fontFamily="var(--font-netflix-core)"
                        fontWeight={"black"}
                        lineHeight={{ base: "1.2", lg: "80px" }}
                        marginBottom="12px"
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
                    <EmailInput width="664px" shadow={true} />
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
                <SaibaMais />

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
                        w="80px"
                        bg="#000"
                        zIndex={10}
                        align="center"
                        justify="center"
                        pl="8px"
                        color="gray.300"
                        opacity={showLeftBtn ? 1 : 0}
                        pointerEvents={showLeftBtn ? "auto" : "none"}
                        transform={
                            showLeftBtn ? "translateX(0)" : "translateX(-100%)"
                        }
                        transition={
                            showLeftBtn
                                ? "transform 0.2s ease-out, opacity 0.1s ease-out"
                                : "transform 0.3s ease-in, opacity 0.3s ease-in"
                        }
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
                                    imgBanner={card.imgBanner}
                                    alt={`Card ${card.titulo}`}
                                    cardTitle={card.cardTitle}
                                    sinopse={card.sinopse}
                                    tags={card.tags}
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
                        pointerEvents={showRightBtn ? "auto" : "none"}
                        transform={
                            showRightBtn ? "translateX(0)" : "translateX(100%)"
                        }
                        transition={
                            showRightBtn
                                ? "transform 0.2s ease-out, opacity 0.1s ease-out"
                                : "transform 0.3s ease-in, opacity 0.3s ease-in"
                        }
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
                    as="section"
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
                                <Heading
                                    as="h2"
                                    margin={0}
                                    fontSize="32px"
                                    fontWeight={"700"}
                                    fontFamily="var(--font-netflix-core)"
                                >
                                    Mais motivos para assinar
                                </Heading>
                            </Box>
                            <Box
                                boxSizing="border-box"
                                display={"inherit"}
                                height={"344px"}
                                width={"100%"}
                            >
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    gap="16px"
                                    marginTop="12px"
                                    width="100%"
                                    height="356px"
                                >
                                    <CardMaisMotivos
                                        title="Aproveite na TV"
                                        subtitle="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
                                        img="/assets/tv.svg"
                                        alt="Icone de TV"
                                    />
                                    <CardMaisMotivos
                                        title="Baixe séries para assistir offline"
                                        subtitle="Salve seus títulos favoritos e sempre tenha algo para assistir."
                                        img="/assets/download.svg"
                                        alt="Icone de download"
                                    />
                                    <CardMaisMotivos
                                        title="Assista onde quiser"
                                        subtitle="Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV."
                                        img="/assets/luneta.svg"
                                        alt="Icone de luneta"
                                    />
                                    <CardMaisMotivos
                                        title="Crie perfis para crianças"
                                        subtitle="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
                                        img="/assets/perfis.svg"
                                        alt="Icone de perfis"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    boxSizing={"border-box"}
                    display={"block"}
                    marginBottom={"48px"}
                    width={"1197px"}
                >
                    <Box
                        boxSizing={"border-box"}
                        display="block"
                        height={"auto"}
                        width={"100%"}
                    >
                        <Box
                            alignItems={"normal"}
                            boxSizing={"border-box"}
                            display="inline-flex"
                            flexDirection={"column"}
                            flexWrap={"wrap"}
                            height={"auto"}
                            justifyContent={"normal"}
                            marginLeft={0}
                            marginTop={"-16px"}
                            maxWidth={"none"}
                            padding={0}
                            width={"100%"}
                        >
                            <Box
                                alignItems={"normal"}
                                boxSizing={"border-box"}
                                display="flex"
                                flexBasis={"auto"}
                                flexGrow={0}
                                flexShrink={1}
                                flexWrap={"wrap"}
                                justifyContent={"normal"}
                                marginTop={"16px"}
                                marginLeft={0}
                                padding={0}
                                width={"327.531px"}
                            >
                                <Heading
                                    as="h2"
                                    boxSizing={"border-box"}
                                    display="block"
                                    margin={0}
                                    padding={0}
                                    fontFamily={"var(--font-netflix-core)"}
                                    fontSize={"32px"}
                                    fontWeight={"700"}
                                    textSizeAdjust={"100%"}
                                >
                                    Perguntas frequentes
                                </Heading>
                            </Box>
                            <Box
                                alignItems={"normal"}
                                boxSizing={"border-box"}
                                display={"flex"}
                                flexBasis={"auto"}
                                flexGrow={0}
                                flexShrink={1}
                                flexWrap={"wrap"}
                                justifyContent={"normal"}
                                marginTop={"16px"}
                                marginLeft={0}
                                padding={0}
                                width={"100%"}
                            >
                                <Box
                                    as="ul"
                                    boxSizing={"border-box"}
                                    display="block"
                                    margin={0}
                                    padding={0}
                                    listStylePosition={"outside"}
                                    listStyleType={"none"}
                                    width={"100%"}
                                >
                                    <FaqItem
                                        question="O que é a Netflix?"
                                        information="A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet."
                                        information2="Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."
                                    />
                                    <FaqItem
                                        question="Quanto Custa a Netflix?"
                                        information="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês."
                                    />
                                    <FaqItem
                                        question="Onde posso assistir?"
                                        information="Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames."
                                        information2="Você também pode baixar suas séries favoritas com o aplicativo Netflix para iOS ou Android. Use os downloads para levar a Netflix para onde quiser sem precisar de conexão com a internet. Leve a Netflix com você para qualquer lugar."
                                    />
                                    <FaqItem
                                        question="Como faço para cancelar?"
                                        information="A Netflix é flexível. Você pode cancelar a sua conta online com apenas dois cliques. Não há taxa de cancelamento. Você inicia e encerra sua assinatura quando quiser."
                                    />
                                    <FaqItem
                                        question="O que eu posso assistir na Netflix?"
                                        information="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."
                                    />
                                    <FaqItem
                                        question="A Netflix é adequada para crianças?"
                                        information="A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis."
                                        information2="O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    boxSizing={"border-box"}
                    display={"block"}
                    marginBottom={"64px"}
                    width={"100%"}
                >
                    <Box
                        boxSizing={"border-box"}
                        display="block"
                        width={"100%"}
                    >
                        <Box
                            boxSizing={"border-box"}
                            display={"block"}
                            marginX={"207px"}
                            marginY={"0px"}
                            maxWidth={"783px"}
                        >
                            <Box
                                as="form"
                                flexDirection={"column"}
                                boxSizing={"border-box"}
                                display={"flex"}
                                marginTop={0}
                            >
                                <Heading
                                    as="h3"
                                    boxSizing={"border-box"}
                                    display={"block"}
                                    margin={0}
                                    textSizeAdjust={"100%"}
                                    fontFamily={"var(--font-netflix-core)"}
                                    fontSize={"16px"}
                                    fontWeight={"400"}
                                    lineHeight={"24px"}
                                    textAlign={"center"}
                                >
                                    Quer assistir? Informe seu email para criar
                                    ou reiniciar sua assinatura.
                                </Heading>
                                <Box
                                    position={"relative"}
                                    alignItems={"center"}
                                    boxSizing={"border-box"}
                                    display={"flex"}
                                    flexDirection={"row"}
                                    paddingTop={"6px"}
                                    width={"100%"}
                                >
                                    <EmailInput width="100%" shadow={false} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    boxSizing={"border-box"}
                    display={"block"}
                    maxWidth={"none"}
                    width={"full"}
                >
                    <Box
                        boxSizing={"border-box"}
                        display={"block"}
                        height={"561px"}
                        paddingBottom={"96px"}
                        width={"100%"}
                    >
                        <Box
                            as="footer"
                            alignItems={"normal"}
                            boxSizing={"border-box"}
                            display={"inline-flex"}
                            flexDirection={"column"}
                            flexWrap={"wrap"}
                            height={"auto"}
                            justifyContent={"normal"}
                            marginTop={"-36px"}
                            padding={0}
                            width={"100%"}
                            maxWidth={"none"}
                        >
                            <Box
                                alignItems={"normal"}
                                boxSizing={"border-box"}
                                display={"flex"}
                                flexBasis={"auto"}
                                flexGrow={0}
                                flexShrink={1}
                                flexWrap={"wrap"}
                                justifyContent={"normal"}
                                marginTop={"36px"}
                                padding={"3px"}
                                width="fit-content"
                            >
                                <Box
                                    as="p"
                                    boxSizing={"border-box"}
                                    display={"block"}
                                    margin={0}
                                    padding={0}
                                    fontFamily={"var(--font-netflix-core)"}
                                    fontSize={"16px"}
                                    fontWeight={"400"}
                                    color={"rgba(255, 255, 255, 0.7)"}
                                >
                                    Dúvidas? Ligue para{" "}
                                    <ChakraLink
                                        as={NextLink}
                                        href="tel:08005918943"
                                        textDecoration="underline"
                                        color={"rgba(255, 255, 255, 0.7)"}
                                    >
                                        0800 591 8943
                                    </ChakraLink>
                                </Box>
                            </Box>

                            <Box
                                alignItems={"normal"}
                                boxSizing={"border-box"}
                                display={"flex"}
                                flexBasis={"auto"}
                                flexGrow={0}
                                flexShrink={1}
                                flexWrap={"wrap"}
                                justifyContent={"normal"}
                                marginTop={"30px"}
                                padding={0}
                                marginLeft={"0px"}
                                width={"100%"}
                            >
                                <Box
                                    boxSizing={"border-box"}
                                    display={"flex"}
                                    height={"auto"}
                                    width={"100%"}
                                    fontSize={"14px"}
                                    padding="4px"
                                    lineHeight={"21px"}
                                >
                                    <Box
                                        as="ul"
                                        alignItems={"flex-start"}
                                        boxSizing={"border-box"}
                                        display={"flex"}
                                        flexDirection={"row"}
                                        flexWrap={"wrap"}
                                        height={"165px"}
                                        justifyContent={"flex-start"}
                                        marginLeft={"-12px"}
                                        marginTop={"-12px"}
                                        maxWidth={"none"}
                                        padding={0}
                                        width={"calc(100% + 0.75rem)"}
                                    >
                                        <FooterListItem
                                            text="Perguntas Frequentes"
                                            href="https://help.netflix.com/support/412"
                                        />
                                        <FooterListItem
                                            text="Central de Ajuda"
                                            href="https://help.netflix.com/"
                                        />
                                        <FooterListItem
                                            text="Conta"
                                            href="https://www.netflix.com/youraccount"
                                        />
                                        <FooterListItem
                                            text="Media Center"
                                            href="https://media.netflix.com/"
                                        />

                                        <FooterListItem
                                            text="Relações com investidores"
                                            href="http://ir.netflix.com/"
                                        />
                                        <FooterListItem
                                            text="Carreiras"
                                            href="https://jobs.netflix.com/jobs"
                                        />
                                        <FooterListItem
                                            text="Resgatar cartão pré-pago"
                                            href="https://www.netflix.com/redeem"
                                        />
                                        <FooterListItem
                                            text="Comprar cartão pré-pago"
                                            href="https://www.netflix.com/gift-cards"
                                        />

                                        <FooterListItem
                                            text="Formas de assistir"
                                            href="https://www.netflix.com/watch"
                                        />
                                        <FooterListItem
                                            text="Termos de Uso"
                                            href="https://help.netflix.com/legal/termsofuse"
                                        />
                                        <FooterListItem
                                            text="Privacidade"
                                            href="https://help.netflix.com/legal/privacy"
                                        />
                                        <FooterListItem
                                            text="Preferências de cookies"
                                            href="https://www.netflix.com/br/#"
                                        />

                                        <FooterListItem
                                            text="Informações corporativas"
                                            href="https://help.netflix.com/legal/corpinfo"
                                        />
                                        <FooterListItem
                                            text="Entre em contato"
                                            href="https://help.netflix.com/contactus"
                                        />
                                        <FooterListItem
                                            text="Teste de velocidade"
                                            href="https://fast.com/"
                                        />
                                        <FooterListItem
                                            text="Avisos legais"
                                            href="https://help.netflix.com/legal/notices"
                                        />

                                        <FooterListItem
                                            text="Só na Netflix"
                                            href="https://www.netflix.com/br/browse/genre/839338"
                                        />
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                alignItems={"normal"}
                                boxSizing={"border-box"}
                                display={"flex"}
                                flexBasis={"auto"}
                                flexGrow={0}
                                flexShrink={1}
                                flexWrap={"wrap"}
                                justifyContent={"normal"}
                                padding={"3px"}
                                marginLeft={"0px"}
                                marginTop={"42px"}
                                width={"fit-content"}
                            >
                                <LanguageSelector />
                            </Box>

                            <Box
                                width={"fit-content"}
                                alignItems={"normal"}
                                boxSizing={"border-box"}
                                display={"flex"}
                                flexBasis={"auto"}
                                flexGrow={0}
                                flexShrink={1}
                                flexWrap={"wrap"}
                                justifyContent={"normal"}
                                marginLeft={0}
                                marginTop={"36px"}
                                padding={0}
                            >
                                <Box
                                    as="p"
                                    boxSizing={"border-box"}
                                    display={"block"}
                                    margin={0}
                                    padding={0}
                                    textSizeAdjust={"100%"}
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    color={"rgba(255, 255, 255, 0.7)"}
                                    fontFamily={"var(--font-netflix-core)"}
                                >
                                    Netflix Brasil
                                </Box>
                            </Box>

                            <Box
                                boxSizing={"border-box"}
                                display={"flex"}
                                flexDirection={"column"}
                                marginTop={"36px"}
                                width={"100%"}
                                fontFamily={"var(--font-netflix-core)"}
                                color={"rgba(255, 255, 255, 0.7)"}
                                textAlign={"left"}
                            >
                                <Box
                                    as="p"
                                    boxSizing={"border-box"}
                                    margin={0}
                                    marginBottom={"16px"}
                                    fontSize={"13px"}
                                    width={"100%"}
                                >
                                    Esta página é protegida pelo Google
                                    reCAPTCHA para garantir que você não é um
                                    robô.
                                    <Text
                                        as="span"
                                        marginLeft={"4px"}
                                        opacity={showKnowMore ? 0 : 1}
                                        transition={"opacity 0.3s ease"}
                                        onClick={() => setShowKnowMore(true)}
                                        color={"rgb(68, 142, 244)"}
                                        textDecoration={"none"}
                                        _hover={{
                                            cursor: "pointer",
                                            textDecoration: "underline",
                                        }}
                                    >
                                        Saiba mais.
                                    </Text>
                                </Box>

                                <Box
                                    boxSizing={"border-box"}
                                    display={"flex"}
                                    opacity={showKnowMore ? 1 : 0}
                                    visibility={
                                        showKnowMore ? "visible" : "hidden"
                                    }
                                    transition={"opacity 0.5s ease"}
                                    fontSize={"13px"}
                                    color="rgba(255, 255, 255, 0.5)"
                                >
                                    <Box as="p" margin={0} padding={0}>
                                        As informações recolhidas pelo Google
                                        reCAPTCHA estão sujeitas à{" "}
                                        <a
                                            href="https://policies.google.com/privacy"
                                            style={{
                                                color: "rgb(68, 142, 244)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            Política de Privacidade
                                        </a>{" "}
                                        e{" "}
                                        <a
                                            href="https://policies.google.com/terms"
                                            style={{
                                                color: "rgb(68, 142, 244)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            Termos de Uso
                                        </a>
                                        , e são usadas para oferecer, manter e
                                        melhorar o serviço reCAPTCHA e por
                                        questões de segurança (não são usadas
                                        para exibir anúncios personalizados pelo
                                        Google).
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <CookieBanner/>
        </Box>
    );
}
