import { MgActionButtons, MgTable } from "@/components/ui";
import { useRouterNavigate } from "@/hooks";
import type { ActionButtonProps, Flow, MgTableColumn } from "@/types/interfaces";
import { formatDate } from "@/utils/dateUtils";
import { Box } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";
import { useTranslation } from "react-i18next";

interface FlowHistoryProps {
    placeholder?: string;
}

export const FlowHistory = ({ placeholder }: FlowHistoryProps): JSX.Element => {

    const { t } = useTranslation();
    const { navigate } = useRouterNavigate();

    const heading = t("flowModificationHistory");
    const click = (item: Flow) => console.log(item)

    const columns: MgTableColumn<Flow>[] = useMemo(() => [
        { name: "flowVersion", key: "version" },
        { name: "updated", key: "updated", render: (item: Flow) => formatDate(item.updated) },
        { name: "author", key: "author" },
    ], []);

    const tableItems: Flow[] = [
        { id: "11", name: "New flow", disease: "Breast cancer", version: "2025.04", created: new Date(), updated: new Date(), author: "jan.kowalski@gmail.com" },
        { id: "22", name: "Fixed flow", disease: "Breast cancer", version: "2025.04", created: new Date(), updated: new Date(), author: "jan.kowalski@gmail.com" },
        { id: "33", name: "New flow", disease: "Lung cancer", version: "2025.05", created: new Date(), updated: new Date(), author: "jan.kowalski@gmail.com" },
    ];

    const buttons: ActionButtonProps[] = [
        { onClick: () => navigate("back"), title: t("back"), variant: "solid" },
    ]

    return (
        <Box w="1500px">
            <MgTable
                items={tableItems}
                columns={columns}
                externalHeading={heading}
                showRowNumber={true}
                onClick={click} />

            <Box textAlign="end" marginY="20px">
                {renderButton()}
            </Box>
        </Box>
    )

    function renderButton() {
        return (
            <MgActionButtons buttons={buttons} />
        )
    }

};
