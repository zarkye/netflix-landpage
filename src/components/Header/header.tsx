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
    Flex,
    StackProps,
} from "@chakra-ui/react";
import NextImage from "next/image";
import netflixLogo from "../../../public/assets/netflixLogo.svg";
import caretDown from "../../../public/assets/caretDown.svg";
import { LuLanguages } from "react-icons/lu";
import netflixBackground from "../../../public/assets/netflix-background.jpg";

const idiomas = createListCollection({
    items: [
        { label: "Português", value: "pt" },
        { label: "English", value: "en" },
    ],
});

export default function Header(props: StackProps) {
    return (
        <HStack as="header"
            zIndex={50}
            px={{ base: "32px", md: "148px", lg: "338px" }}
            py={0}
            w="100vw"
            h={120}
            align="flex-start"
            background="linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7889) 8.333%, rgba(0, 0, 0, 0.7556) 16.67%, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0.6222) 33.33%, rgba(0, 0, 0, 0.5222) 41.67%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2778) 58.33%, rgba(0, 0, 0, 0.1778) 66.67%, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.0444) 83.33%, rgba(0, 0, 0, 0.0111) 91.67%, transparent 100%)"
            {...props}
        >
            <HStack
                h={88}
                w="100%"
                flexDirection="row"
                justify="space-between"
                paddingRight="30px"
            >
                <Box w="30%">
                    <NextImage
                        height={40}
                        width={148}
                        src={netflixLogo}
                        alt="Netflix"
                    />
                </Box>
                <HStack w="100%" justify={"flex-end"} gap={0}>
                    <Select.Root
                        collection={idiomas}
                        size="xs"
                        width="146px"
                        height="32px"
                        defaultValue={["pt"]}
                        
                        fontFamily="sans-serif"
                    >
                        <Select.HiddenSelect />
                        <Select.Control fontWeight="500">
                            <Select.Trigger
                                bg="gray.950/80"
                                color="white"
                                border="1px solid rgba(255, 255, 255, 0.5)"
                                borderRadius="4px"
                                px={3}
                                _open={{
                                    outline: "2px solid white", outlineOffset: "2px"
                                }}
                                display="flex"
                                alignItems="center"
                                fontSize={16}
                                fontWeight="500"
                            >
                                <LuLanguages />

                                <Select.ValueText fontWeight="bold" placeholder="Idioma" />

                                <NextImage
                                    height={3.86}
                                    width={7.53}
                                    src={caretDown}
                                    alt="Icone para abrir a caixa de seleção de idiomas"
                                />
                            </Select.Trigger>
                        </Select.Control>

                        <Portal>
                            <Select.Positioner>
                                <Select.Content
                                    bg="#fff"
                                    color="#000"
                                    borderRadius="initial"
                                    fontSize={16}
                                >
                                    {idiomas.items.map((item) => (
                                        <Select.Item
                                            textAlign={"center"}
                                            item={item}
                                            key={item.value}
                                            _hover={{
                                                bg: "blue.600",
                                                color: "#fff",
                                            }}
                                            cursor="pointer"
                                        >
                                            {item.label}
                                        </Select.Item>
                                    ))}
                                </Select.Content>
                            </Select.Positioner>
                        </Portal>
                    </Select.Root>
                    <Button ml="12px" h="32px" bgColor="rgb(229, 9, 20)" color="white" fontWeight="bold" fontSize={14} fontFamily="sans-serif">
                        Entrar
                    </Button>
                </HStack>
            </HStack>
        </HStack>
    );
}
