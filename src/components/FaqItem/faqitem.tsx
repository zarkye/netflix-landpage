import { Box, Heading } from "@chakra-ui/react";
import NextImage from 'next/image'
import { useState } from "react";

interface FaqItemProps {
    question: string;
    information: string;
    information2?: string;
}

export default function FaqItem({ question, information, information2 }: FaqItemProps) {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box
            as="li"
            boxSizing={"border-box"}
            display={"list-item"}
            marginBottom={"8px"}
            padding={0}
            width={"100%"}
        >
            <Heading
                as="h3"
                position={"relative"}
                boxSizing={"border-box"}
                display={"flex"}
                margin={0}
                bg="rgb(45, 45, 45)"
                _hover={{ bg: "rgb(65, 65, 65)" }}
            >
                <Box
                    as="button"
                    onClick={() => setIsOpen(!isOpen)}
                    alignItems={"center"}
                    boxSizing={"content-box"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    margin={0}
                    overflowX={"visible"}
                    overflowY={"visible"}
                    padding={"24px"}
                    width={"100%"}
                    textSizeAdjust={"100%"}
                    fontFamily={"var(--font-netflix-core)"}
                    fontSize={"24px"}
                    fontWeight={"400"}
                    letterSpacing={"normal"}
                    lineHeight={"normal"}
                    textAlign={"left"}
                    cursor="pointer"
                >
                    {question}

                    <NextImage
                        src="/assets/plus.svg"
                        alt="Abrir pergunta"
                        width={36}
                        height={36}
                        style={{
                            filter: "invert(100%)",
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                    />
                </Box>
            </Heading>
            <Box
                display={isOpen ? 'block' : "none"}
                borderTopWidth={"1px"}
                borderColor={"rgb(0, 0 ,0)"}
                boxSizing={"border-box"}
                bg="rgb(45, 45 ,45)"
                paddingX={"24px"}
                paddingY={isOpen ? "24px" : 0}
                visibility={isOpen ? "visible" : "collapse"}
                width={"100%"}
            >
                <Box as="span"
                    boxSizing={"border-box"}
                    display={"inline"}
                    height={"auto"}
                    visibility={"visible"}
                    width={"auto"}
                    textSizeAdjust={"100%"}
                    fontFamily={"var(--font-netflix-core)"}
                    fontSize={"24px"}
                    fontWeight={"400"}
                    lineHeight={"shorter"}
                    textAlign={"left"}
                >
                    {information}
                    {information2 && (
                    <Box as="span"
                        boxSizing={"border-box"}
                        display={"inline-block"}
                        marginTop={"30px"}
                        height={"auto"}
                        visibility={"visible"}
                        width={"auto"}
                        textSizeAdjust={"100%"}
                        fontFamily={"var(--font-netflix-core)"}
                        fontSize={"24px"}
                        fontWeight={"400"}
                        textAlign={"left"}
                    >
                        {information2}
                    </Box>
                )}
                </Box>

            </Box>
        </Box>
    );
}
