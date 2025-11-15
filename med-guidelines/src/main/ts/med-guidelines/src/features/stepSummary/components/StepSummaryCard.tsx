import { MgCard, MgDataList, MgHeading } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";
import { StepSummaryParameters } from "./StepSummaryParameters";
import { Box } from "@chakra-ui/react";
import { StepSummaryNextSteps } from "./StepSummaryNextSteps";

interface StepSummaryCardProps {
    placeholder?: string;
}

export const StepSummaryCard = ({ placeholder }: StepSummaryCardProps): JSX.Element => {

    const { t } = useTranslation();

    const buttons: ActionButtonProps[] = [
        { onClick: () => console.log("prev"), title: t("prev"), variant: "outline" },
        { onClick: () => console.log("close"), title: t("close") },
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
                    <StepSummaryNextSteps />
                </Box>
            </>
        )
    }

};
