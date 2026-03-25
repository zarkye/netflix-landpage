import { Box, Button, Spinner } from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";

interface VamosButtonLoadProps {
    url: string;
}

export default function VamosButtonLoad({ url }: VamosButtonLoadProps) {
    const [buttonClick, setButtonClick] = useState(false);

    const handleButtonClick = () => {
        if (buttonClick) return;

        setButtonClick(true);

        setTimeout(() => {
            window.location.href = url;
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
            <Button
                bottom={0}
                onClick={handleButtonClick}
                position="relative"
                height="100%"
                margin={0}
                minHeight="48px"
                paddingY="8px"
                paddingX="16px"
                width="137.7px"
                backgroundColor={
                    buttonClick ? "rgb(119, 5, 10)" : "rgb(229, 9, 20)"
                }
                fontSize="18px"
                color="white"
                borderRadius="4px"
                _hover={{
                    backgroundColor: buttonClick
                        ? "rgb(119, 5, 10)"
                        : "rgb(240, 15, 25)",
                }}
                loading={buttonClick}
                spinner={
                    <Spinner
                        size="md"
                        filter={"blur(0.5px)"}
                        color="rgba(255, 255, 255, 0.7)"
                    />
                }
            >
                <Box display="flex" alignItems="center" justifyContent="center">
                    Vamos lá
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        height="24px"
                        width="24px"
                        marginLeft="8px"
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
                </Box>
            </Button>
        </Box>
    );
}
