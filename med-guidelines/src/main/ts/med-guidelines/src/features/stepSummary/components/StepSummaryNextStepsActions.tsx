
import { MgIconButton } from "@/components/ui";
import type { Flow } from "@/types/interfaces";
import type { callbackFn } from "@/types/types";
import { HStack } from "@chakra-ui/react";
import { Eye, Pencil, Trash } from "lucide-react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

interface StepSummaryNextStepsActionsProps {
    edit: callbackFn<Flow>;
    deleteF: callbackFn<Flow>;
    open: callbackFn<Flow>;
}

export const StepSummaryNextStepsActions = ({ edit, deleteF, open}: StepSummaryNextStepsActionsProps): JSX.Element => {

    const { t } = useTranslation();

    return (
        <HStack gap="4">
            <MgIconButton tooltip={t("edit")} onClick={edit}><Pencil /></MgIconButton>
            <MgIconButton tooltip={t("delete")} onClick={deleteF}><Trash /></MgIconButton>
            <MgIconButton tooltip={t("open")} onClick={open}><Eye /></MgIconButton>
        </HStack>
    )
};
