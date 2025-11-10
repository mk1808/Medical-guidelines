import { type JSX } from "react";
import "./../styles.scss";
import { Box, Flex } from "@chakra-ui/react";
import MgLink from "./MgLink";
import { useTranslation } from "react-i18next";
import LoggedUser from "./LoggedUser";
import { Logo } from "./Logo";

const NavBar = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Box borderBottomWidth="1px" width="full" borderColor="accent" marginBottom="40px" marginTop="10px" paddingLeft="40px" paddingRight="10px">
                <Flex gap="4">
                    <Box marginEnd="auto">
                        <Logo />
                    </Box>
                    <MgLink title={t("flowList")} path="/flowList" />
                    <MgLink title={t("treatmentHistory")} path="/treatmentHistory" />
                    <LoggedUser />
                </Flex>
        </Box>
    )
};

export default NavBar;