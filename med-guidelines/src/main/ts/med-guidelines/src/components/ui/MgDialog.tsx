import type { renderFn, voidFn } from '@/types/types';
import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react';
import { useState, type Dispatch, type JSX, type ReactNode, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface MgDialogProps {
    title: string,
    triggerButton: renderFn,
    saveButton: renderFn,
    body: renderFn,
    open:boolean,
    setOpen:Dispatch<SetStateAction<boolean>>
}

const MgDialog = ({ title, triggerButton, saveButton, body, open, setOpen }: MgDialogProps): JSX.Element => {
    const { t } = useTranslation();


    return (
        <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
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
        </Dialog.Root>
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
                    <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                {saveButton()}
            </Dialog.Footer>
        );
    };

}

export default MgDialog;