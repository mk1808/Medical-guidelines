import { MgAccordion, MgDataList } from "@/components/ui";
import { ProposedTreatmentList } from "@/features/proposedTreatment/components/ProposedTreatmentList";
import type { JSX } from "react";
import { useTranslation } from "react-i18next";

interface TreatmentAccordionElementProps {
    placeholder?: string;
}

export const TreatmentAccordionElement = ({ placeholder }: TreatmentAccordionElementProps): JSX.Element => {
    const { t } = useTranslation();

    const treatmentSteps: string[] = [
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "Fusce sed vehicula urna",
        "Quisque tincidunt nibh quis velit ultricies",
        "et semper arcu eleifend"
    ];

    const treatmentStepName = "Proposed treatment";
    const treatmentStepInfoText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius. "

    const stepNoWithName = (stepNo: number, stepName: string) => [`${t("step")} ${stepNo}: ${stepName}`];

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
        { id: 4, label: stepNoWithName(4, treatmentStepName), value: renderProposedTreatment() }
    ]
    return (
        <MgAccordion items={accordionItems} />
    )

    function renderParamsWithValues() {
        return (
            <MgDataList items={dataListItems} />
        )
    }

    function renderProposedTreatment() {
        return (
            <ProposedTreatmentList infoText={treatmentStepInfoText} treatmentSteps={treatmentSteps} />
        )
    }
};