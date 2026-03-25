import {
    Box,
    Flex,
    Text,
    Button,
    DialogRoot,
    DialogTrigger,
    DialogBackdrop,
    DialogContent,
    DialogCloseTrigger,
} from "@chakra-ui/react";
import { useState } from "react";
import NextImage from "next/image";

export default function CookieBanner() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [isCookieVisible, setIsCookieVisible] = useState<boolean | null>(
        () => {
            if (typeof window === "undefined") return null;

            return localStorage.getItem("netflix_cookie_closed") !== "true";
        },
    );

    if (!isCookieVisible) return null;

    const handleCloseBanner = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem("netflix_cookie_closed", "true");
        }
        setIsCookieVisible(false);
    };

    const bannerZIndex = isDialogOpen ? 900 : 1000;

    return (
        <DialogRoot
            placement="center"
            open={isDialogOpen}
            onOpenChange={(e) => setIsDialogOpen(e.open)}
        >
            <Box
                id="cookie-banner"
                position="fixed"
                top="9.5%"
                left="50%"
                transform="translateX(-50%)"
                width="90%"
                maxHeight="12%"
                maxWidth="90%"
                bg="#f3f3f3"
                zIndex={bannerZIndex}
                paddingX="31px"
                paddingY="21px"
            >
                <Flex justify="space-between" align="center" gap={6}>
                    <Box>
                        <Text
                            fontSize="13px"
                            color="#333"
                            lineHeight="1.5"
                            fontFamily={"sans-serif"}
                            letterSpacing="normal"
                            mb={4}
                        >
                            A Netflix usa cookies para fins de personalização,
                            publicidade e mais. Leia mais{" "}
                            <a
                                href="https://help.netflix.com/legal/privacy#cookies"
                                style={{
                                    textDecoration: "underline",
                                    color: "rgb(42, 42, 42)",
                                    fontWeight: "bold",
                                }}
                            >
                                aqui
                            </a>{" "}
                            ou altere suas preferências de cookies selecionando
                            “Saiba mais”. A Netflix segue os princípios da
                            Digital Advertising Alliance. Ao interagir com este
                            site, você concorda com o uso de cookies.
                        </Text>

                        <DialogTrigger asChild>
                            <Button
                                bg="#e50914"
                                color="white"
                                _hover={{ bg: "#f40612" }}
                                width="125px"
                                height="39px"
                                borderRadius="none"
                                fontFamily={"sans-serif"}
                                fontWeight={"500"}
                            >
                                Saiba mais
                            </Button>
                        </DialogTrigger>
                    </Box>

                    <Box
                        as="button"
                        width="12px"
                        height="12px"
                        flexShrink={0}
                        cursor="pointer"
                        bgImage="url('https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8b2-7e25-941e-ca85bec09209/logos/static/ot_close.svg')"
                        bgSize="12px"
                        bgRepeat="no-repeat"
                        backgroundPosition="center"
                        _hover={{ opacity: 0.7 }}
                        onClick={handleCloseBanner}
                    />
                </Flex>
            </Box>

            <DialogBackdrop
                position="fixed"
                top="0"
                left="0"
                w="100vw"
                h="100vh"
                bg="blackAlpha.600"
                zIndex={1400}
            />

            <DialogContent
                position="fixed"
                borderRadius={"none"}
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                bg="white"
                maxW="850px"
                w="730px"
                h="610px"
                p={0}
                zIndex={1500}
                overflow="hidden"
                display="flex"
                flexDirection="column"
                animation="justFadeIn 0.3s ease-out !important"
            >
                <Flex
                    p="16px 24px"
                    align="center"
                    justify="space-between"
                    flexShrink={0}
                >
                    <NextImage
                        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8b2-7e25-941e-ca85bec09209/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                        width={95}
                        height={40}
                        alt="netflix"
                    />

                    <Text
                        fontWeight="bold"
                        fontSize="16px"
                        color="#333"
                        fontFamily="sans-serif"
                    >
                        Centro de preferências de privacidade
                    </Text>

                    <DialogCloseTrigger
                        position="relative"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="24px"
                        h="24px"
                        cursor="pointer"
                        color="#666"
                        _hover={{ color: "#000" }}
                        fontWeight="bold"
                    >
                        ✕
                    </DialogCloseTrigger>
                </Flex>

                <Flex flex="1" overflow="hidden">
                    <Box w="30%" bg="white" overflowY="auto">
                        <Box
                            p="14px 20px"
                            borderLeft="4px solid #e50914"
                            bg="#f5f5f5"
                            fontWeight="bold"
                            fontSize="13px"
                            color="#333"
                            fontFamily="sans-serif"
                        >
                            Descrição geral
                        </Box>

                        {[
                            "Cookies essenciais",
                            "Cookies de desempenho e de funcionalidades originais",
                            "Cookies de desempenho e de funcionalidades de terceiros",
                            "Cookies publicitários",
                        ].map((item, index) => (
                            <Box
                                key={index}
                                p="14px 20px"
                                borderLeft="4px solid transparent"
                                fontWeight="normal"
                                fontSize="13px"
                                color="#666"
                                fontFamily="sans-serif"
                                _hover={{ bg: "#f9f9f9" }}
                            >
                                {item}
                            </Box>
                        ))}
                    </Box>

                    <Box w="70%" p="24px 32px" overflowY="auto">
                        <Text
                            fontWeight="bold"
                            fontSize="15px"
                            color="#333"
                            mb={4}
                            fontFamily="sans-serif"
                        >
                            Descrição geral
                        </Text>

                        <Text
                            fontSize="12px"
                            color="#555"
                            mb={4}
                            lineHeight="1.6"
                            fontFamily="sans-serif"
                        >
                            O objetivo desta ferramenta é ajudar você a entender
                            o uso de cookies no serviço Netflix e como é
                            possível controlar o uso deles. As configurações de
                            privacidade da maioria dos navegadores permitem
                            recusar alguns ou todos os cookies, notificam você
                            quando recebem um novo cookie e até bloqueiam todos
                            os cookies. Se o seu navegador bloquear todos os
                            cookies, as informações não serão coletadas nem
                            armazenadas por meio dos cookies listados na
                            ferramenta. Isso significa que seu uso do serviço
                            Netflix pode ser prejudicado. Quando você utilizar
                            essa ferramenta de cookies para desativar certos
                            cookies, suas preferências serão salvas por meio de
                            um cookie instalado em seu aparelho. Por isso, seu
                            navegador deve estar configurado para aceitar
                            cookies, a fim de que suas preferências sejam
                            lembradas. Além disso, ao apagar ou limpar os
                            cookies, ou se usar outro navegador, você terá que
                            redefinir as preferências de cookies. Para saber
                            mais sobre como utilizamos cookies, acesse a seção
                            Cookies e publicidade na Internet da nossa
                            Declaração de privacidade.
                        </Text>
                    </Box>
                </Flex>

                <Flex
                    borderTop="1px solid #e5e5e5"
                    p="16px 24px"
                    align="center"
                    justify="space-between"
                    flexShrink={0}
                    bg="white"
                >
                    <Button
                        bg="#e50914"
                        color="white"
                        _hover={{ bg: "#f40612" }}
                        px={6}
                        h="36px"
                        fontSize="13px"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        onClick={handleCloseBanner}
                    >
                        Guardar definições
                    </Button>

                    <Text
                        fontSize="11px"
                        color="#999"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                    >
                        Powered by{" "}
                        <Text as="span" color="#666">
                            onetrust
                        </Text>
                    </Text>
                </Flex>
            </DialogContent>
        </DialogRoot>
    );
}
