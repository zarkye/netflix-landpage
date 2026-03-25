"use client";
import { HStack, Box, Button, StackProps } from "@chakra-ui/react";
import NextImage from "next/image";

import LanguageSelector from "../LanguageSelect/languageselect";
import { useState } from "react";

export default function Header(props: StackProps) {
    const [buttonClick, setButtonClick] = useState(false);

    const handleButtonClick = () => {
        if (buttonClick) return;

        setButtonClick(true);

        setTimeout(() => {
            window.location.href = "https://www.netflix.com/login";
        }, 500);
    };

    return (
        <HStack
            as="header"
            zIndex={50}
            paddingLeft={"354px"}
            paddingRight={"340px"}
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
                        src="/assets/netflixLogo.svg"
                        alt="Netflix"
                    />
                </Box>
                <HStack w="100%" justify={"flex-end"} gap={0}>
                    <LanguageSelector />
                    <Button
                        ml="12px"
                        onClick={handleButtonClick}
                        h="32px"
                        bgColor="rgb(229, 9, 20)"
                        color="white"
                        fontFamily="var(--font-netflix-core)"
                        fontSize={14}
                    >
                        Entrar
                    </Button>
                </HStack>
            </HStack>
        </HStack>
    );
}
