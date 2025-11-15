import { MgCard, MgDataList, MgHeading } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";
import { Box } from "@chakra-ui/react";
import { FlowStepsTable } from "./FlowStepsTable";
import { useSteps } from "../hooks/useSteps";

export const FlowSummaryCard = (): JSX.Element => {

    const { t } = useTranslation();
    const { getSteps } = useSteps();

    const buttons: ActionButtonProps[] = [
        { onClick: () => console.log("close"), title: t("close"), variant: "outline" },
        { onClick: () => console.log("edit"), title: t("edit") },
    ]

    const heading: string = t("flowSummary");

    const dataListItems = [
        { label: t("flowName"), value: "Step abc name" },
        { label: t("disease"), value: "Breast cancer" },
        { label: t("flowVersion"), value: "2025.04" }
    ];

    const steps = getSteps();


    return (
        <MgCard heading={heading} buttons={buttons}>
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (
            <>
                {renderMainInfo()}
                {renderSteps()}
            </>
        )
    }

    function renderMainInfo() {
        return <MgDataList items={dataListItems} />
    }

    function renderSteps() {
        return (
            <>
                <MgHeading text={t('steps')} size='md' withSeparator />
                <Box mt="4">
                    <FlowStepsTable steps={steps} />
                </Box>
            </>
        )
    }

};
