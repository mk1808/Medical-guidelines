import { MgCard } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

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

    return (
        <MgCard heading={heading} externalHeading={externalHeading} buttons={buttons}>
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (<>
            {renderMainInfo()}
            {renderParameters()}
            {renderNextSteps()}
        </>)
    }

    function renderMainInfo() {
        return <></>
    }

    function renderParameters() {
        return <></>
    }

    function renderNextSteps() {
        return <></>
    }

};
