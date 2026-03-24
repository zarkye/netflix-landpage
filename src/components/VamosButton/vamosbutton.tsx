import { Box } from "@chakra-ui/react";

import NextImage from 'next/image'

export default function VamosButton() {
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
                backgroundColor={"rgb(229, 9, 20)"}
                fontSize={"18px"}
                color="white"
                borderRadius={"4px"}
                _hover={{cursor: "pointer"}}
            >
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
            </Box>
        </Box>
    );
}
