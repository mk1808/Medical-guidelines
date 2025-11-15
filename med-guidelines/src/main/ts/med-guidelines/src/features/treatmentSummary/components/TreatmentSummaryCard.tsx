import { MgAccordion, MgCard, MgDataList, MgList } from "@/components/ui";
import { ProposedTreatmentList } from "@/features/proposedTreatment/components/ProposedTreatmentList";
import type { ActionButtonProps } from "@/types/interfaces";
import { formCardExternalHeading } from "@/utils/cardUtils";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";
import { TreatmentAccordionElement } from "./TreatmentAccordionElement";

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

    return (
        <MgCard heading={heading} infoText={treatmentSummaryText} externalHeading={externalHeading} buttons={buttons}>
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (
            <Box>
                <TreatmentAccordionElement/>
            </Box>
        )
    }


};
