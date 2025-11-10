import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useMemo, type JSX, type ReactNode } from "react";
import MgLink from "./navBar/MgLink";
import { useTranslation } from "react-i18next";

const Footer = (): JSX.Element => {
    const { t } = useTranslation();
    const year: number = useMemo(() => new Date().getFullYear(), []);

    return (
        <div>
            <FooterBox>
                {renderFooterContent()}
            </FooterBox>
            <Box background="secondary.50" width="100%" height="50px" padding="4" >
                <Center>
                    <Text>{t("iimo")} &#169; {year}</Text>
                </Center>
            </Box>
        </div>
    )

    function renderFooterContent() {
        return (
            <>
                <Box height="36" width="200px" >
                    <Heading mb="6">{t("contact")}</Heading>
                    <MgLink title="iimo.pl" path="https://www.iimo.pl" isButton={false} isExternal={true} />
                </Box>
                <Box height="36" width="200px">
                    <Heading mb="6">{t("subpages")}</Heading>
                    <MgLink title={t("flowList")} path="/flowList" isButton={false} /> <br />
                    <MgLink title={t("treatmentHistory")} path="/treatmentHistory" isButton={false} />
                </Box>
            </>
        )
    }
}

const FooterBox = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <Box background="primary" width="100%" height="200px" padding="4" color="white">
            <Flex direction="column" gap="8">
                <Flex gap="4" justify="flex-end">
                    {children}
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer;