import { MgCard, MgDataList, MgHeading } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";
import { StepSummaryParameters } from "./StepSummaryParameters";
import { Box } from "@chakra-ui/react";
import { StepSummaryNextSteps } from "./StepSummaryNextSteps";
import { useRouterNavigate } from "@/hooks";

interface StepSummaryCardProps {
    placeholder?: string;
}

export const StepSummaryCard = ({ placeholder }: StepSummaryCardProps): JSX.Element => {

    const { t } = useTranslation();
    const { navigate } = useRouterNavigate();

    const buttons: ActionButtonProps[] = [
        { onClick: () => navigate("back"), title: t("prev"), variant: "outline" },
        { onClick: () => navigate("flowListAdmin"), title: t("save") },
    ]
    const stepNo = 1;
    const heading: string = `${t("step")} ${stepNo}`
    const flowName: string = "Disease X";
    const externalHeading: string = `${t("newFlow")}: ${flowName}`;

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius.";
    const dataListItems = [
        { label: t("stepName"), value: "Step abc name" },
        { label: t("stepDescription"), value: description }
    ];

    const step: any = {
        nextSteps: [
            { stepId: 11, name: "step 1 name", conditions: [{ param: "param 1", value: "value 2" }] },
            { stepId: 22, name: "step 2 name", conditions: [{ param: "param 1", value: "value 1" }] },
            { stepId: 33, name: "step 3 name", conditions: [{ param: "param 1", value: "value 3" }, { param: "param 2", value: "value 1" }] },
        ]
    }

    return (
        <MgCard heading={heading} externalHeading={externalHeading} buttons={buttons}>
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (
            <>
                {renderMainInfo()}
                {renderParameters()}
                {renderNextSteps()}
            </>
        )
    }

    function renderMainInfo() {
        return <MgDataList items={dataListItems} />
    }

    function renderParameters() {
        return (
            <>
                <MgHeading text={t('parameters')} size='md' withSeparator />
                <Box mt="4">
                    <StepSummaryParameters />
                </Box>
            </>
        )
    }

    function renderNextSteps() {
        return (
            <>
                <MgHeading text={t('nextSteps')} size='md' withSeparator />
                <Box mt="4">
                    <StepSummaryNextSteps step={step} />
                </Box>
            </>
        )
    }

};
