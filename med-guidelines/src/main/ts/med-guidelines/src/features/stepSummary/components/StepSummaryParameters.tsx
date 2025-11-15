import { MgDataList } from "@/components/ui";
import { type JSX } from "react";

interface StepSummaryParametersProps {
    placeholder?: string;
}

export const StepSummaryParameters = ({ placeholder }: StepSummaryParametersProps): JSX.Element => {

    const dataListItems = [
        { label: "Param 1", value: "value 1" },
        { label: "Param 2", value: "value 2" },
        { label: "Param 3", value: "value 3" }
    ];

    return <MgDataList items={dataListItems} />


};
