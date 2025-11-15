
import { MgIconButton } from "@/components/ui";
import type { Flow } from "@/types/interfaces";
import type { callbackFn } from "@/types/types";
import { HStack } from "@chakra-ui/react";
import { Eye, Pencil } from "lucide-react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

interface FlowStepActionsProps {
    edit: callbackFn<Flow>;
    open: callbackFn<Flow>;
}

export const FlowStepActions = ({ edit, open }: FlowStepActionsProps): JSX.Element => {

    const { t } = useTranslation();

    return (
        <HStack gap="4">
            <MgIconButton tooltip={t("edit")} onClick={edit}><Pencil /></MgIconButton>
            <MgIconButton tooltip={t("open")} onClick={open}><Eye /></MgIconButton>
        </HStack>
    )
};
