import { type JSX } from "react";
import "./../styles.scss";
import { ChevronDown, User } from 'lucide-react';
import { Button, HStack, Menu, Portal } from "@chakra-ui/react";
import { getCssVar } from "@/config/themeConfig";
import { useTranslation } from "react-i18next";


const LoggedUser = (): JSX.Element => {
    const { t } = useTranslation();

    const currentUser = "exampleUser@gmail.com";
    return (
        <HStack marginLeft="10px">
            {currentUser}
            <User />
            {renderUserDropdown()}
        </HStack>
    );

    function renderUserDropdown() {
        return (
            <Menu.Root>
                <Menu.Trigger asChild>
                    {renderButton()}
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner colorPalette="primary">
                        <Menu.Content>
                            <Menu.Item value="logout">{t("logout")}</Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        );
    }

    function renderButton() {
        return (
            <Button variant="ghost" colorPalette={"primary"} size="lg">
                <ChevronDown color={getCssVar("colors.primary")} />
            </Button>
        );
    }
};

export default LoggedUser;