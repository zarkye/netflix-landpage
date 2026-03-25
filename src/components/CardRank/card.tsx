import {
    Box,
    Text,
    Button,
    Badge,
    Group,
    Stack,
    Image as ChakraImage,
    HStack,
} from "@chakra-ui/react";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogRoot,
    DialogTrigger,
    DialogBackdrop,
} from "@/components/ui/dialog";
import NextImage from "next/image";
import TagItem from "../TagItem/tagitem";
import { useEffect, useState } from "react";
import VamosButton from "../VamosButtonModal/vamosbutton";

interface NetflixCardProps {
    numero: number;
    img: string;
    imgBanner?: string;
    alt: string;
    sinopse?: string;
    cardTitle?: string;
    tags?: string[];
}

export default function NetflixCard({
    numero,
    img,
    imgBanner,
    alt,
    sinopse,
    cardTitle,
    tags = [],
}: NetflixCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showBg, setShowBg] = useState(false);

    //use effect pra controlar a transição borrada da imagem de fundo do modal
    useEffect(() => {
        if (!isOpen) return;

        const timer = setTimeout(() => setShowBg(true), 350);

        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <DialogRoot
            placement="center"
            onOpenChange={(e) => {
                setIsOpen(e.open);
                if (!e.open) {
                    setShowBg(false);
                }
            }}
        >
            <DialogTrigger asChild>
                <Box
                    as="button"
                    position="relative"
                    w="214px"
                    h="300px"
                    border="none"
                    p={0}
                    cursor="pointer"
                    transition="transform 0.2s ease"
                    _hover={{ transform: "scale(1.05)" }}
                >
                    <Box
                        w="full"
                        h="full"
                        borderRadius="8px"
                        overflow="hidden"
                        boxShadow="lg"
                        position="relative"
                    >
                        <NextImage
                            src={img}
                            alt={alt}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </Box>

                    <Text
                        position="absolute"
                        bottom="15px"
                        left="-22px"
                        fontSize="120px"
                        fontFamily="var(--font-netflix-black)"
                        fontWeight="900"
                        color="#000"
                        lineHeight="1"
                        zIndex={2}
                        style={{ WebkitTextStroke: "1px white" }}
                    >
                        {numero}
                    </Text>
                </Box>
            </DialogTrigger>

            <DialogBackdrop bg="blackAlpha.800" />

            <DialogContent
                bg="rgb(22, 22, 22)"
                css={{
                    "&[data-state='open']": {
                        animation: "netflixPop 0.3s",
                    },
                }}
                color="white"
                borderRadius="8px"
                overflow="hidden"
                borderColor={"rgba(128, 128, 128, 0.4)"}
                maxW="669px"
                minH="630px"
                borderWidth={"1px"}
                w="667px"
                h="auto"
            >
                <Box
                    boxSizing={"border-box"}
                    flex="0 0 auto"
                    left={0}
                    overflow={"visible"}
                    right={0}
                    textAlign={"right"}
                    top={0}
                    zIndex={1}
                    position={"sticky"}
                    height={"0px"}
                    paddingY={"0px"}
                    paddingX={"16px"}
                >
                    <DialogCloseTrigger
                        position="relative"
                        alignItems={"center"}
                        boxSizing={"border-box"}
                        display={"inline-flex"}
                        height={"40px"}
                        right={"-1px"}
                        justifyContent={"center"}
                        marginY={"8px"}
                        marginX="0px"
                        overflowX="visible"
                        overflowY="visible"
                        paddingY="2px"
                        paddingX="7px"
                        width={"40px"}
                        borderRadius={"full"}
                        _hover={{ backgroundColor: "rgba(128, 128, 128, 0.4)" }}
                    >
                        <NextImage
                            src="/assets/x.svg"
                            alt="fechar inspecionar titulo"
                            width={24}
                            height={24}
                            style={{ filter: "invert(100%)" }}
                        />
                    </DialogCloseTrigger>
                </Box>

                <DialogBody
                    p={0}
                    position="relative"
                    display="block"
                    flexBasis="auto"
                    flexGrow={1}
                    flexShrink={1}
                    minHeight={"628px"}
                    overflowY={"auto"}
                    width={"100%"}
                    zIndex={0}
                    textSizeAdjust={"100%"}
                >
                    <Box
                        position="relative"
                        display="block"
                        height={"full"}
                        width={"full"}
                        zIndex={0}
                        direction={"ltr"}
                    >
                        <Box
                            position="relative"
                            display="block"
                            height="0px"
                            width={"100%"}
                            paddingBottom={"375px"}
                            overflow={"hidden"}
                            _after={{
                                content: "''",
                                position: "absolute",
                                bottom: 0,
                                display: "block",
                                left: 0,
                                right: 0,
                                top: 0,
                                width: "full",
                                zIndex: 2,
                                backgroundAttachment: "scroll, scroll",
                                backgroundClip: "border-box, border-box",
                                backgroundColor: "rgba(0, 0 ,0, 0)",
                                color: "rgba(255, 255, 255, 0.7)",
                                background:
                                    "linear-gradient(40deg, rgb(22, 22, 22) 24.16%, rgba(6, 10, 23, 0) 56.61%), linear-gradient(0deg, rgb(22, 22, 22) 3.91%, rgba(6, 10, 23, 0) 69.26%)",
                                backgroundOrigin: "padding-box",
                                backgroundPositionX: "0%, 0%",
                                backgroundPositionY: "0%, 0%",
                                backgroundRepeat: "repeat, repeat",
                                backgroundSize: "auto, auto",
                            }}
                        >
                            <Box
                                position="absolute"
                                bottom="0px"
                                display="block"
                                height={"full"}
                                left="0px"
                                right="0px"
                                top="0px"
                                width={"full"}
                                zIndex={1}
                                bgImage={
                                    imgBanner ? `url(${imgBanner})` : "none"
                                }
                                backgroundPositionX={"50%"}
                                backgroundPositionY={"0%"}
                                backgroundRepeat={"no-repeat"}
                                backgroundSize={"cover"}
                                opacity={showBg ? 1 : 0}
                                transition="opacity 0.3s ease-in-out"
                                unicodeBidi={"isolate"}
                            ></Box>
                            <Box
                                position="absolute"
                                bottom={"0px"}
                                display="block"
                                height={"full"}
                                width="full"
                                left={0}
                                right={0}
                                top={0}
                                zIndex={-1}
                                bgImage={
                                    imgBanner ? `url(${imgBanner})` : "none"
                                }
                                backgroundPositionX={"50%"}
                                backgroundPositionY={"0%"}
                                backgroundRepeat={"no-repeat"}
                                backgroundSize={"cover"}
                                unicodeBidi={"isolate"}
                                filter={"blur(10px)"}
                            ></Box>
                            <Box
                                position={"absolute"}
                                bottom="0px"
                                left="40px"
                                zIndex={3}
                                display={"flex"}
                                alignItems={"flex-end"}
                                justifyContent={"flex-start"}
                                width="60%"
                                maxHeight={"104px"}
                                minHeight={"54px"}
                                maxWidth="560px"
                            >
                                <NextImage
                                    src={cardTitle || img}
                                    alt="Título da Série"
                                    height={74}
                                    width={399}
                                    style={{
                                        objectFit: "contain",

                                        maxHeight: "100px",
                                        objectPosition: "left bottom",
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box
                            display="block"
                            height={"auto"}
                            paddingBottom={"40px"}
                            paddingLeft={"40px"}
                            paddingRight={"40px"}
                            paddingTop={"16px"}
                        >
                            <Box
                                as="ul"
                                listStyleType="none"
                                display={"block"}
                                marginBottom={"12px"}
                                padding={0}
                            >
                                <Box
                                    as="li"
                                    display="inline-block"
                                    marginRight={"8px"}
                                    textSizeAdjust={"100%"}
                                    lineHeight={"22px"}
                                    color="rgba(255, 255, 255, 0.7)"
                                >
                                    {tags.map((tagText, index) => (
                                        <TagItem key={index} text={tagText} />
                                    ))}
                                </Box>
                            </Box>
                            <Box
                                display={"block"}
                                maxHeight={"52px"}
                                paddingTop={"16px"}
                                maxWidth={"587px"}
                                backgroundColor={"rgb(22, 22, 22)"}
                            >
                                <Box
                                    as="p"
                                    display={"block"}
                                    height={"100%"}
                                    margin={0}
                                    padding={0}
                                    width={"100%"}
                                    fontSize={"16px"}
                                    fontWeight={"400"}
                                    fontFamily="sans-serif"
                                    lineHeight={"18px"}
                                >
                                    {sinopse}
                                </Box>
                                <VamosButton />
                            </Box>
                        </Box>
                    </Box>
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    );
}
