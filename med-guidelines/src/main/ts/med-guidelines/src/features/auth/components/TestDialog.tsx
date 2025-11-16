
import MgDialog from "@/components/ui/MgDialog";
import type { callbackFn } from "@/types/types";
import { Button, useDialog } from "@chakra-ui/react";
import { useEffect, type JSX, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface TestDialogProps {
    children?: ReactNode,
    isOpen?: boolean,
    dialogOpenChange?: callbackFn<boolean>
}

export const TestDialog = ({ children, isOpen = false, dialogOpenChange }: TestDialogProps): JSX.Element => {

    const { t } = useTranslation();
    const title = t('welcome');
    const dialog = useDialog();

    useEffect(() => {
        dialogOpenChange?.(dialog.open)
    }, [dialog.open]);

    useEffect(() => {
        dialog.setOpen(isOpen)
    }, [isOpen])

    const save = () => { console.log('saved'); dialog.setOpen(false); }
    return (
        <MgDialog
            dialog={dialog}
            title={title}
            body={renderBody}
            saveButton={renderSaveButton}
            triggerButton={renderTriggerButton}
        />
    )

    function renderBody() {
        return (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        )
    }

    function renderSaveButton() {
        return <Button onClick={save}>Save</Button>

    }

    function renderTriggerButton() {
        if (children) {
            return children;
        }
        return (
            <Button>
                Open Dialog
            </Button>
        )
    }
}