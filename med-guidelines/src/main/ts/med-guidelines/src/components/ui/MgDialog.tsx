import type { renderFn } from '@/types/types';
import { Button, CloseButton, Dialog, Portal, type UseDialogReturn } from '@chakra-ui/react';
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

interface MgDialogProps {
    title: string,
    triggerButton: renderFn,
    saveButton: renderFn,
    body: renderFn,
    dialog: UseDialogReturn
}

const MgDialog = ({ title, triggerButton, saveButton, body, dialog }: MgDialogProps): JSX.Element => {

    const { t } = useTranslation();

    return (
        <Dialog.RootProvider lazyMount value={dialog} >
            <Dialog.Trigger asChild>{renderDialogTrigger()}</Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        {renderDialogHeader()}
                        {renderDialogBody()}
                        {renderDialogFooter()}
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.RootProvider>
    )

    function renderDialogTrigger() {
        return triggerButton();
    };

    function renderDialogHeader() {
        return (
            <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
        );
    };

    function renderDialogBody() {
        return <Dialog.Body>{body()}</Dialog.Body>;
    };

    function renderDialogFooter() {
        return (
            <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                    <Button variant="outline">{t("cancel")}</Button>
                </Dialog.ActionTrigger>
                {saveButton()}
            </Dialog.Footer>
        );
    };

}

export default MgDialog;