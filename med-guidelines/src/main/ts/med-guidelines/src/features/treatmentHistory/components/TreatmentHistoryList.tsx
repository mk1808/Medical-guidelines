import { MgTable } from "@/components/ui";
import { useRouterNavigate } from "@/hooks";
import type { MgTableColumn, TreatmentHistory } from "@/types/interfaces";
import { formatDate } from "@/utils/dateUtils";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

interface TreatmentHistoryListProps {
    placeholder?: string;
}

export const TreatmentHistoryList = ({ placeholder }: TreatmentHistoryListProps): JSX.Element => {

    const { t } = useTranslation();
    const { navigate } = useRouterNavigate();
    const heading = t("treatmentHistoryList");
    const click = (item: TreatmentHistory) => navigate("treatmentSummaryAfterSave");

    const tableColumns: MgTableColumn<TreatmentHistory>[] = [
        { name: "disease", key: "disease" },
        { name: "flowName", key: "name" },
        { name: "flowVersion", key: "version" },
        { name: "fillDate", key: "fillDate", render: (item) => formatDate(item.created) },
        { name: "patientId", key: "patientId" }
    ];

    const tableItems: TreatmentHistory[] = [
        { id: "11", name: "New flow", disease: "Breast cancer", version: "2025.04", created: new Date(), updated: new Date(), patientId: "05/08/2025" },
        { id: "22", name: "Fixed flow", disease: "Breast cancer", version: "2025.04", created: new Date(), updated: new Date(), patientId: "06/08/2025" },
        { id: "33", name: "New flow", disease: "Lung cancer", version: "2025.05", created: new Date(), updated: new Date(), patientId: "07/08/2025" },

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
