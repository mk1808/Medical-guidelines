import { MgCard, MgList } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { formCardExternalHeading } from "@/utils/cardUtils";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

interface ProposedTreatmentCardProps {
    placeholder?: string;
}

export const ProposedTreatmentCard = ({ placeholder }: ProposedTreatmentCardProps): JSX.Element => {

    const { t } = useTranslation();
    const stepNo = 3;
    const stepName = "Proposed treatment";

    const text = [`${t("step")} ${stepNo}`, stepName];
    const flowName = "X";
    const disease = "lung cancer";
    const version = "2025.04.1"

    const externalHeading = formCardExternalHeading({ flowName, disease, version });

    const buttons: ActionButtonProps[] = [
        { onClick: () => console.log("prev"), title: t("prev"), variant: "outline" },
        { onClick: () => console.log("close"), title: t("close") },
    ]

    const newText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius. "

    const treatmentSteps: string[] = [
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "Fusce sed vehicula urna",
        "Quisque tincidunt nibh quis velit ultricies",
        "et semper arcu eleifend"
    ];


    return (
        <MgCard heading={text} infoText={newText} externalHeading={externalHeading} buttons={buttons}>
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (
            <Box marginLeft="20px">
                <MgList items={treatmentSteps} />
            </Box>
        )
    }
};
