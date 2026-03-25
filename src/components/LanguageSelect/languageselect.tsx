import { createListCollection, Portal, Select } from "@chakra-ui/react";
import { LuLanguages } from "react-icons/lu";

import NextImage from 'next/image'

export default function LanguageSelector() {

    const idiomas = createListCollection({
        items: [
            { label: "Português", value: "pt" },
            { label: "English", value: "en" },
        ],
    });
    
    return (
        <Select.Root
            collection={idiomas}
            width="146px"
            defaultValue={["pt"]}
            fontFamily="var(--font-netflix-tight)"
        >
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger
                    bg="gray.950/80"
                    color="white"
                    border="1px solid rgba(255, 255, 255, 0.5)"
                    borderRadius="4px"
                    px={2}
                    h="32px"
                    minH="32px"
                    py={0}
                    _open={{
                        outline: "2px solid white",
                        outlineOffset: "2px",
                    }}
                    display="flex"
                    alignItems="center"
                    fontSize={16}
                    lineHeight="normal"
                >
                    <LuLanguages />

                    <Select.ValueText fontWeight="bold" placeholder="Idioma" />

                    <NextImage
                        height={16}
                        width={16}
                        src="/assets/caretDown.svg"
                        alt="Icone para abrir a caixa de seleção de idiomas"
                        style={{ filter: "invert(100%)" }}
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
    );
}
