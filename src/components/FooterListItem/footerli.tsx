import { Box, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from 'next/link'

interface FooterListItemProps {
    text: string;
    href: string;
}

export default function FooterListItem({text, href}: FooterListItemProps) {
    return (
        <Box
            as="li"
            alignItems={"normal"}
            boxSizing={"border-box"}
            display={"flex"}
            flexBasis={"calc(25% - 12px)"}
            flexGrow={0}
            flexShrink={0}
            flexWrap={"wrap"}
            justifyContent={"normal"}
            marginLeft={"12px"}
            marginTop="12px"
            width="inherit"
            padding={0}
        >
            <ChakraLink
                as={NextLink}
                display={"block"}
                margin={0}
                padding={0}
                fontFamily={"var(--font-netflix-core)"}
                fontSize={"14px"}
                textDecoration={"underline"}
                fontWeight={"400"}
                color={"rgba(255, 255, 255, 0.7)"}
                href={href}
            >
                {text}
            </ChakraLink>
        </Box>
    );
}
