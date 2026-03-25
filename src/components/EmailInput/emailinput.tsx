import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import NextImage from 'next/image'
import VamosButtonNormal from "../VamosButtonNormal/vamosbutton";
import VamosButton from "../VamosButtonModal/vamosbutton";

interface EmailInputProps {
    width: string;
    shadow?: boolean;
}

export default function EmailInput({width, shadow}: EmailInputProps) {

    const [email, setEmail] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailInvalid = email.length > 0 && !emailRegex.test(email);
    const isButtonDisabled = email.length === 0 || isEmailInvalid;

    return (
        <Flex
            mt="8px"
            w={width}
            maxW="full"
            flexDir={{ base: "column", md: "row" }}
            gap="10px"
            align="flex-start"
        >
            <Box w="100%" display="flex" flexDir="column">
                <Box position="relative" w="100%">
                    <Input
                        placeholder=" "
                        onChange={(c) => setEmail(c.target.value)}
                        className="peer"
                        fontWeight="600"
                        color="rgba(255, 255, 255, 1)"
                        type="email"
                        fontSize="md"
                        h="56px"
                        border={
                            email.length === 0
                                ? "1px solid rgba(255, 255, 255, 0.3)" //se nao tiver nada no e-mail fica na cor padrao
                                : isEmailInvalid
                                  ? "1px solid red" //se nao passar no regex
                                  : "1px solid green" //se passar
                        }
                        bg="rgba(24, 23, 21, 0.6)"
                        boxShadow={shadow ? "0 0 30px rgba(109, 99, 95, 0.1)" : undefined}
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
                        _peerFocus={{
                            top: "16px",
                            fontSize: "12px",
                        }}
                        css={{
                            ".peer:not(:placeholder-shown) ~ &": {
                                top: "16px",
                                fontSize: "12px",
                            },
                        }}
                    >
                        Email
                    </Text>
                </Box>
                {isEmailInvalid && (
                    <Box
                        boxSizing={"border-box"}
                        display={"flex"}
                        width={"100%"}
                        textAlign={"left"}
                    >
                        <Box
                            boxSizing={"border-box"}
                            display={"block"}
                            width={"100%"}
                            textAlign={"left"}
                        >
                            <Box
                                boxSizing={"border-box"}
                                display={"flex"}
                                flexDirection={"row"}
                                gap={"4px"}
                                marginTop={"6px"}
                                width={"100%"}
                                alignItems={"center"}
                                fontWeight={"400"}
                                fontSize={"13px"}
                                textAlign={"left"}
                                color={"rgb(235, 57, 66)"}
                            >
                                <NextImage
                                    src="/assets/x-email.svg"
                                    alt="Inválido"
                                    width={16}
                                    height={16}
                                    style={{
                                        filter: "invert(31%) sepia(85%) saturate(3015%) hue-rotate(338deg) brightness(98%) contrast(93%)",
                                    }}
                                />
                                O email é obrigatório
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>

            <VamosButtonNormal disable={isButtonDisabled} />
        </Flex>
    );
}
