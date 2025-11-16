
import MgDialog from "@/components/ui/MgDialog";
import type { Flow } from "@/types/interfaces";
import type { callbackFn } from "@/types/types";
import { Button } from "@chakra-ui/react";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";

interface TestDialogProps {
    edit: callbackFn<Flow>;
    open1: callbackFn<Flow>;
}

export const TestDialog = ({ edit, open1 }: TestDialogProps): JSX.Element => {

    const { t } = useTranslation();

    const title = 'Dialog Title';
    const [open, setOpen] = useState(false);

    return (
        <MgDialog
            open={open}
            setOpen={setOpen}
            title={title}
            body={renderBody}
            saveButton={renderSaveButton}
            triggerButton={renderTriggerButton}
        />
    );

    function renderBody() {
        return (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        );
    };

    function renderSaveButton() {
        return <Button onClick={() => {console.log('saved'); setOpen(false)}}>Save</Button>;
    };

    function renderTriggerButton() {
        return (
            <Button variant="outline" size="sm">
                Open Dialog
            </Button>
        );
    };
};