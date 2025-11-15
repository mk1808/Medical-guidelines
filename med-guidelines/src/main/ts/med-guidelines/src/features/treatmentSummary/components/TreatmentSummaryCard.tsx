import { MgCard, MgDataList } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { formCardExternalHeading } from "@/utils/cardUtils";
import { Box } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { TreatmentAccordionElement } from "./TreatmentAccordionElement";
import { formatDate } from "@/utils/dateUtils";

interface TreatmentSummaryCardProps {
    placeholder?: string;
}

export const TreatmentSummaryCard = ({ placeholder }: TreatmentSummaryCardProps): JSX.Element => {

    const { t } = useTranslation();

    const heading = t("treatmentSummary");
    const flowName = "X";
    const disease = "lung cancer";
    const version = "2025.04.1"
    const externalHeading = formCardExternalHeading({ flowName, disease, version });
    const treatmentSummaryText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius. "

    const buttons: ActionButtonProps[] = [
        { onClick: () => console.log("prev"), title: t("prev"), variant: "outline" },
        { onClick: () => console.log("close"), title: t("close") },
    ]

    const externalHeadingAdditionalInfoData = useMemo(() => [
        { label: t("patientId"), value: "05/08/2025" },
        { label: t("fillDate"), value: formatDate(new Date()) },
    ], [])


    return (
        <MgCard
            heading={heading}
            infoText={treatmentSummaryText}
            externalHeading={externalHeading}
            buttons={buttons}
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
        return (
            <MgDataList items={externalHeadingAdditionalInfoData} />
        )
    }


};
