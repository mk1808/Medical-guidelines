import { MgTable } from "@/components/ui";
import { useSteps } from "@/features/flowSummary/hooks/useSteps";
import { StepSummaryNextStepsActions } from "@/features/stepSummary/components/StepSummaryNextStepsActions";
import type { MgTableColumn, Step } from "@/types/interfaces";
import { formatDate } from "@/utils/dateUtils";
import { Button, Center, Stack } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";
import { useTranslation } from "react-i18next";

interface AddNextStepsSectionProps {
    placeholder?: string;
}

export const AddNextStepsSection = ({ placeholder }: AddNextStepsSectionProps): JSX.Element => {

    const { t } = useTranslation();
    const click = (item: Step) => console.log(item)
    const { getSteps } = useSteps();

    const nextSteps = getSteps().slice(0, 3);

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
        <Center>
            <Stack gap={4}>
                <MgTable
                    items={nextSteps}
                    columns={columns}
                    showRowNumber={true}
                    onClick={click} />
                {renderAddButton()}
            </Stack>
        </Center>
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

    function renderAddButton() {
        return (
            <Center px="5">
                <Button variant="solid">{t("addNextStep")}</Button>
            </Center>
        )

    }
};



