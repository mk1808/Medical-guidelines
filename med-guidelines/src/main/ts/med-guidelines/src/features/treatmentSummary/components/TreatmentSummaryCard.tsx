import { MgCard, MgDataList } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { formCardExternalHeading } from "@/utils/cardUtils";
import { Box } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { TreatmentAccordionElement } from "./TreatmentAccordionElement";
import { formatDate } from "@/utils/dateUtils";
import { useParams } from "react-router";

interface TreatmentSummaryCardProps {
    placeholder?: string;
}

export const TreatmentSummaryCard = ({ placeholder }: TreatmentSummaryCardProps): JSX.Element => {

    const { t } = useTranslation();
    const { afterSave } = useParams();
    const isAfterSave: boolean = afterSave === "afterSave";

    const heading = t("treatmentSummary");
    const flowName = "X";
    const disease = "lung cancer";
    const version = "2025.04.1"
    const externalHeading = formCardExternalHeading({ flowName, disease, version });
    const treatmentSummaryText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius. "

    const actionButtons = useMemo(getActionButtons, [])

    const externalHeadingAdditionalInfoData = useMemo(() => [
        { label: t("patientId"), value: "05/08/2025" },
        { label: t("fillDate"), value: formatDate(new Date()) },
    ], [])

    function getActionButtons() {
        const buttons: ActionButtonProps[] = [
            { onClick: () => console.log("close"), title: t("close") },
        ]
        if (!isAfterSave) {
            buttons.unshift(
                { onClick: () => console.log("prev"), title: t("prev"), variant: "outline" }
            );
        }
        return buttons;
    }

    return (
        <MgCard
            heading={heading}
            infoText={treatmentSummaryText}
            externalHeading={externalHeading}
            buttons={actionButtons}
            externalHeadingAdditionalInfo={renderExternalHeadingAdditionalInfo()}
        >
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (
            <Box>
                <TreatmentAccordionElement />
            </Box>
        )
    }

    function renderExternalHeadingAdditionalInfo() {
        if (isAfterSave) {
            return (
                <MgDataList items={externalHeadingAdditionalInfoData} />
            )
        }

        return <></>
    }


};
