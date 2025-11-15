
import { MgIconButton } from "@/components/ui";
import type { Flow } from "@/types/interfaces";
import type { callbackFn } from "@/types/types";
import { HStack } from "@chakra-ui/react";
import { ClipboardClock, Copy, Eye, Pencil, Trash } from "lucide-react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

interface FlowListActionsProps {
    edit: callbackFn<Flow>;
    deleteF: callbackFn<Flow>;
    open: callbackFn<Flow>;
    copy: callbackFn<Flow>;
    checkHistory: callbackFn<Flow>;
}

export const FlowListActions = ({ edit, deleteF, open, copy, checkHistory }: FlowListActionsProps): JSX.Element => {

    const { t } = useTranslation();

    return (
        <HStack gap="4">
            <MgIconButton tooltip={t("edit")} onClick={edit}><Pencil /></MgIconButton>
            <MgIconButton tooltip={t("delete")} onClick={deleteF}><Trash /></MgIconButton>
            <MgIconButton tooltip={t("open")} onClick={open}><Eye /></MgIconButton>
            <MgIconButton tooltip={t("copy")} onClick={copy}><Copy /></MgIconButton>
            <MgIconButton tooltip={t("checkHistory")} onClick={checkHistory}><ClipboardClock /></MgIconButton>
        </HStack>
    )
};
