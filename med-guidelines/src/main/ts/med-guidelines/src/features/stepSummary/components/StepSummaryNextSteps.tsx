import { MgTable } from "@/components/ui";
import type { MgTableColumn, Step } from "@/types/interfaces";
import { formatDate } from "@/utils/dateUtils";
import { useMemo, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { StepSummaryNextStepsActions } from "./StepSummaryNextStepsActions";

interface StepSummaryNextStepsProps {
    step?: any;
}

export const StepSummaryNextSteps = ({ step }: StepSummaryNextStepsProps): JSX.Element => {

    const { t } = useTranslation();

    const click = (item: Step) => console.log(item)

    const columns: MgTableColumn<Step>[] = useMemo(() => [
        { name: "stepId", key: "stepId" },
        { name: "stepName", key: "name" },
        { name: "updated", key: "updated", render: (item: Step) => formatDate(item.created) },
        { name: "conditions", key: "conditions", render: (item: Step) => renderConditions(item) },
        { name: "actions", key: "actions", render: renderActionButtons }
    ], []);

    const open = (event: React.MouseEvent<HTMLButtonElement>, item: Step) => { event.stopPropagation(); console.log("open" + item.id) }
    const deleteF = (event: React.MouseEvent<HTMLButtonElement>, item: Step) => { event.stopPropagation(); console.log("delete" + item.id) }
    const edit = (event: React.MouseEvent<HTMLButtonElement>, item: Step) => { event.stopPropagation(); console.log("edit" + item.id) }

    return (
        <MgTable
            items={step.nextSteps}
            columns={columns}
            showRowNumber={true}
            onClick={click} />
    )

    function renderConditions(nextStep: any) {
        return nextStep?.conditions?.map((condition: any, index: number) => <p key={index}>{`${condition.param}: ${condition.value} `}</p>)
    }

    function renderActionButtons(item: any) {
        return (
            <StepSummaryNextStepsActions
                open={(e) => open(e, item)}
                edit={(e) => edit(e, item)}
                deleteF={(e) => deleteF(e, item)} />
        )
    }
};
