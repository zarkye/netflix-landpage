import { Box, Button, Text } from "@chakra-ui/react";
import NextImage from "next/image";
export default function SaibaMais() {
    return (
        <Box w="100%" paddingTop={0} marginBottom="64px" height="77px">
            <Box
                boxSizing="border-box"
                display="block"
                height="77px"
                transition="all 0.5s cubic-bezier(0.33, 0, 0, 1)"
            >
                <Box
                    boxSizing="border-box"
                    display="inherit"
                    height="auto"
                    width="100%"
                    position="relative"
                >
                    <Box
                        position="absolute"
                        top="-9px"
                        zIndex={2}
                        display="block"
                        width="96px"
                    >
                        <NextImage
                            src="/assets/popcorn.svg"
                            alt="pipoca"
                            height={77}
                            width={77}
                        />
                    </Box>
                    <Box
                        position="relative"
                        marginLeft="100px"
                        height="77px"
                        backgroundClip="border-box"
                        bg="linear-gradient(91deg, #261733, #151a3f)"
                        borderRadius="16px"
                        _before={{
                            inset: 0,
                            position: "absolute",
                            content: "''",
                            borderRadius: "16px",
                            bg: "linear-gradient(91deg, #482566 0%, #161d52 99.51%)",
                            transition:
                                "opacity 0.5s cubic-bezier(0.33, 0, 0, 1)",
                            opacity: 0,
                        }}
                        _hover={{
                            _before: {
                                opacity: 1,
                            },
                        }}
                    >
                        <Box
                            boxSizing="border-box"
                            display="flex"
                            minHeight="77px"
                            width="100%"
                        >
                            <Box
                                alignItems="center"
                                boxSizing="border-box"
                                display="flex"
                                flexDirection="row"
                                flexWrap="wrap"
                                paddingX="32px"
                                width="100%"
                                justifyContent={"space-between"}
                            >
                                <Box
                                    alignItems="normal"
                                    boxSizing="border-box"
                                    display="flex"
                                    flexDirection="column"
                                    flexBasis="auto"
                                    flexGrow={1}
                                    flexShrink={1}
                                    justifyContent="center"
                                    maxWidth="445px"
                                    width="100%"
                                    zIndex={3}
                                    position="relative"
                                    gap={0}
                                    marginLeft="6px"
                                >
                                    <Text
                                        as="h3"
                                        width="100%"
                                        marginBottom="0px"
                                        fontFamily="var(--font-netflix-core)"
                                        fontSize="20px"
                                        fontWeight="500"
                                        color="white"
                                        marginTop="6px"
                                        lineHeight="1.2"
                                    >
                                        A Netflix que você adora por apenas R$
                                        20,90.
                                    </Text>

                                    <Text
                                        as="p"
                                        whiteSpace="nowrap"
                                        width="100%"
                                        margin={0}
                                        fontSize="16px"
                                        fontWeight="400"
                                        color="white"
                                        fontFamily="var(--font-netflix-core)"
                                    >
                                        Aproveite nossa opção mais acessível, o
                                        plano com anúncios.
                                    </Text>
                                </Box>
                                <Box
                                    alignItems="center"
                                    boxSizing="border-box"
                                    display="flex"
                                    flexBasis={"auto"}
                                    flexGrow={0}
                                    flexShrink={1}
                                    justifyContent={"center"}
                                    padding={0}
                                    maxWidth="111px"
                                    fontFamily="var(--font-netflix-core)"
                                >
                                    <Button
                                        alignItems="center"
                                        boxSizing="border-box"
                                        display="flex"
                                        overflow="visible"
                                        margin={0}
                                        right={2}
                                        color="white"
                                        width="100%"
                                        bg="rgba(128, 128, 128, 0.4)"
                                        borderRadius={"4px"}
                                        fontSize={"16px"}
                                        _hover={{
                                            bg: "rgba(128, 128, 128, 0.3)",
                                        }}
                                    >
                                        Saiba mais
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
