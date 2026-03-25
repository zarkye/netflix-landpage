import { Button, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";

interface VamosButtonNormalProps {
    disable: boolean;
}

export default function VamosButtonNormal({disable}: VamosButtonNormalProps) {
    const [buttonClick, setButtonClick] = useState(false);
    
    const handleButtonClick = () => {
        if (buttonClick || disable) return; 
    
        setButtonClick(true);
    
        setTimeout(() => {
            window.location.href = "https://www.netflix.com/login";
        }, 500);
    };

    return (
        <Button
            color="#fff"
            onClick={handleButtonClick}
            bgColor="red"
            h="56px"
            px="30px"
            w={{ base: "full", md: "185px" }}
            fontSize="24px"
            fontWeight="700"
            fontFamily="sans-serif"
            cursor={"pointer"}
            letterSpacing={"tight"}
        >
            Vamos lá
            <Icon as={LuChevronRight} boxSize={8} />
        </Button>
    );
}