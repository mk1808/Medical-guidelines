import { MgTable } from "@/components/ui";
import type { Flow, MgTableColumn } from "@/types/interfaces";
import { formatDate } from "@/utils/dateUtils";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

interface FlowListProps {
    placeholder?: string;
}

export const FlowList = ({ placeholder }: FlowListProps): JSX.Element => {

    const { t } = useTranslation();
    const heading = t("availableFlows");
    const click = (item: Flow) => console.log(item);

    const tableColumns: MgTableColumn<Flow>[] = [
        { name: "disease", key: "disease" },
        { name: "flowName", key: "name" },
        { name: "flowVersion", key: "version" },
        { name: "created", key: "created", render: (item: Flow) => formatDate(item.created) },
        { name: "author", key: "author" },
        { name: "updated", key: "updated", render: (item: Flow) => formatDate(item.updated) }
    ];

    const tableItems: Flow[] = [
        { id: "11", name: "New flow", disease: "Breast cancer", version: "2025.04", created: new Date(), updated: new Date(), author: "jan.kowalski@gmail.com" },
        { id: "22", name: "Fixed flow", disease: "Breast cancer", version: "2025.04", created: new Date(), updated: new Date(), author: "jan.kowalski@gmail.com" },
        { id: "33", name: "New flow", disease: "Lung cancer", version: "2025.05", created: new Date(), updated: new Date(), author: "jan.kowalski@gmail.com" },

    ];
    return (
        <Box w="1500px">
            <MgTable
                items={tableItems}
                columns={tableColumns}
                externalHeading={heading}
                showRowNumber={true}
                onClick={(item) => click(item)} />
        </Box>
    )
};
