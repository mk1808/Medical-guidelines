import { MgCard, MgDataList, MgHeading, MgTable } from "@/components/ui";
import type { ActionButtonProps, Flow, MgTableColumn } from "@/types/interfaces";
import { formatDate } from "@/utils/dateUtils";
import { useMemo, type JSX } from "react";
import { useTranslation } from "react-i18next";

interface StepSummaryNextStepsProps {
    placeholder?: string;
}

export const StepSummaryNextSteps = ({ placeholder }: StepSummaryNextStepsProps): JSX.Element => {

    const { t } = useTranslation();


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


    return (
        <MgTable
            items={tableItems}
            columns={columns}
            showRowNumber={true}
            onClick={click} />
    )




};
