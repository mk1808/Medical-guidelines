import { MgAccordion, MgCard, MgDataList, MgList } from "@/components/ui";
import { ProposedTreatmentList } from "@/features/proposedTreatment/components/ProposedTreatmentList";
import type { ActionButtonProps } from "@/types/interfaces";
import { formCardExternalHeading } from "@/utils/cardUtils";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

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

    const buttons: ActionButtonProps[] = [
        { onClick: () => console.log("prev"), title: t("prev"), variant: "outline" },
        { onClick: () => console.log("close"), title: t("close") },
    ]
const finalStepName = "Proposed treatment";
    const newText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius. "

    const treatmentSteps: string[] = [
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "Fusce sed vehicula urna",
        "Quisque tincidunt nibh quis velit ultricies",
        "et semper arcu eleifend"
    ];

    const stepNoWithName = (stepNo:number, stepName:string)=>[`${t("step")} ${stepNo}: ${stepName}`];

        const dataListItems = [
        { label: "Param 1", value: "value 1" },
        { label: "Last Name", value: "Bhatia" },
        { label: "Email", value: "jassie@jassie.dev" },
        { label: "Phone", value: "1234567890" },
        { label: "Address", value: "1234 Main St, Anytown, USA" },
    ];
    const accordionItems = [
        { id: 1, label: stepNoWithName(1, "Some step name 1"), value: renderParamsWithValues() }, 
        { id: 2, label: stepNoWithName(2, "Some step name 2"), value: renderParamsWithValues() }, 
        { id: 3, label: stepNoWithName(3, "Some step name 3"), value: renderParamsWithValues() },
         { id: 4, label: stepNoWithName(4, finalStepName), value: renderProposedTreatment() }
    ]


    return (
        <MgCard heading={heading} infoText={newText} externalHeading={externalHeading} buttons={buttons}>
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (
            <Box>
                <MgAccordion items={accordionItems}></MgAccordion>
            </Box>
        )
    }

    function renderParamsWithValues(){
        return (
            <MgDataList items={dataListItems}/>
        )

    }

     function renderProposedTreatment(){
        return (
            <ProposedTreatmentList/>
        )

    }

    
};
