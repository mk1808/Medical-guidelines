import { MgTable } from "@/components/ui";
import type { Step, MgTableColumn } from "@/types/interfaces";
import { useMemo, type JSX } from "react";
import { FlowStepActions } from "./FlowStepActions";

interface FlowStepsTableProps {
    steps: Step[];
}

export const FlowStepsTable = ({ steps }: FlowStepsTableProps): JSX.Element => {

    const click = (item: Step) => console.log(item)

    const columns: MgTableColumn<Step>[] = useMemo(() => [
        { name: "stepName", key: "name" },
        { name: "actions", key: "actions", render: renderActionButtons }
    ], []);

    const open = (event: React.MouseEvent<HTMLButtonElement>, item: Step) => { event.stopPropagation(); console.log("open" + item.id) }
    const edit = (event: React.MouseEvent<HTMLButtonElement>, item: Step) => { event.stopPropagation(); console.log("edit" + item.id) }

    return (
        <MgTable
            items={steps}
            columns={columns}
            showRowNumber={true}
            onClick={click} />
    )


    function renderActionButtons(step: Step) {
        return (
            <FlowStepActions
                open={(e) => open(e, step)}
                edit={(e) => edit(e, step)} />
        )
    }
};
