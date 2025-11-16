
import { MgInput } from "@/components/ui";
import MgDialog from "@/components/ui/MgDialog";
import { useRouterNavigate } from "@/hooks";
import type { callbackFn } from "@/types/types";
import { Button, useDialog } from "@chakra-ui/react";
import { useEffect, useState, type JSX, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface SaveTreatmentDialogProps {
    children?: ReactNode,
    isOpen?: boolean,
    dialogOpenChange?: callbackFn<boolean>
}

export const SaveTreatmentDialog = ({ isOpen = false, dialogOpenChange }: SaveTreatmentDialogProps): JSX.Element => {

    const { t } = useTranslation();
    const { navigate } = useRouterNavigate();
    const dialog = useDialog();
    const [patientId, setPatientId] = useState<string>();

    const title = t('saveTreatmentSummary');

    useEffect(() => {
        dialogOpenChange?.(dialog.open)
    }, [dialog.open]);

    useEffect(() => {
        dialog.setOpen(isOpen)
    }, [isOpen])

    const save = () => {
        dialog.setOpen(false);
        navigate("treatmentSummaryAfterSave")
    }

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
            <MgInput label={t("patientId")} value={patientId} onValueChange={setPatientId} />
        )
    }

    function renderSaveButton() {
        return <Button onClick={save}>{t("save")}</Button>

    }

    function renderTriggerButton() {
        return null;
    }
}