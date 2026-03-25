import { Box } from "@chakra-ui/react";

interface TagProps {
    text: string
}

export default function TagItem({ text }: TagProps) {
    return (
        <Box
        display="inline-block"
        marginRight={"8px"}
        textSizeAdjust={"100%"}
        lineHeight={"20px"}
        color="rgba(255, 255, 255, 0.7)"
    >
        <Box
            as="span"
            alignItems={"center"}
            color="rgba(255, 255, 255, 0.7)"
            display="flex"
            justifyContent={"center"}
            paddingY={"3px"}
            paddingX={"4px"}
            textSizeAdjust={"100%"}
            lineHeight={"21px"}
            fontSize={"14px"}
            borderRadius={"4px"}
            backgroundColor={"rgb(65, 65, 65)"}
                fontFamily={"sans-serif"}
                letterSpacing={"tight"}
            
        >
            {text}
        </Box>
    </Box>
    )
}
