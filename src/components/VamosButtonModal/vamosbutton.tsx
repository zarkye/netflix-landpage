import { Box, Spinner } from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";


export default function VamosButton() {
    const [buttonClick, setButtonClick] = useState(false);

    const handleButtonClick = () => {
        if (buttonClick) return;

        setButtonClick(true);

        setTimeout(() => {
            window.location.href = "https://www.netflix.com/signup";
        }, 500);
    };

    return (
        <Box
            display={"block"}
            height={"48px"}
            paddingTop={"40px"}
            width={"293.5px"}
            fontFamily={"sans-serif"}
            color="rgba(255, 255, 255, 0.7)"
        >
            <Box
                as="button"
                bottom={0}
                onClick={handleButtonClick}
                pointerEvents={buttonClick ? "none" : "auto"}
                position={"relative"}
                alignItems={"center"}
                justifyContent={"center"}
                boxSizing={"border-box"}
                display={"inline-flex"}
                height={"100%"}
                margin={0}
                minHeight={"48px"}
                overflowX={"visible"}
                overflowY={"visible"}
                paddingY={"8px"}
                paddingX={"16px"}
                width={"137.7px"}
                backgroundColor={
                    buttonClick ? "rgb(119, 5, 10)" : "rgb(229, 9, 20)"
                }
                fontSize={"18px"}
                color="white"
                borderRadius={"4px"}
                _hover={{ cursor: buttonClick ? "default" : "pointer" }}
            >
                {buttonClick ? (
                    <Spinner size="md" filter={"blur(0.5px)"} color="rgba(255, 255, 255, 0.7)" />
                ) : (
                    <>
                        Vamos lá
                        <Box
                            display={"block"}
                            height={"24px"}
                            width={"24px"}
                            marginLeft={"8px"}
                        >
                            <NextImage
                                src="/assets/caretRight.svg"
                                alt="Click no Vamos lá"
                                width={24}
                                height={24}
                                style={{
                                    filter: "invert(100%)",
                                }}
                            />
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}
