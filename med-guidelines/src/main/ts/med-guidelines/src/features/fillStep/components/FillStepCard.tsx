import { MgCard, MgSelect } from "@/components/ui";
import type { ActionButtonProps, SelectValueProps } from "@/types/interfaces";
import { Center, Stack } from "@chakra-ui/react";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";
interface FillStepCardProps {
    placeholder?: string;
}

export const FillStepCard = ({ placeholder }: FillStepCardProps): JSX.Element => {

    const { t } = useTranslation();
    const stepNo = 1;
    const stepName = "Some step name";
    const text = [`${t("step")} ${stepNo}`, stepName];
    const flowName = "X";
    const disease = "lung cancer";
    const version = "2025.04.1"
    const externalHeading = `${t("flow")} ${flowName} ${t("forDisease")} ${disease}, ${t("version")}: ${version}`;
    const buttons: ActionButtonProps[] = [
        { onClick: () => console.log("cancel"), title: t("cancel"), variant: "outline" },
        { onClick: () => console.log("save"), title: t("next") },
    ]
    const newText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius. "
    const frameworks: SelectValueProps<string>[] = [
        { label: "React.js", value: "react", key: "react" },
        { label: "Vue.js", value: "vue", key: "vue" },
        { label: "Angular", value: "angular", key: "angular" },
        { label: "Svelte", value: "svelte", key: "svelte" },
    ];

    const [selectedValue, setSelectedValue] = useState<string>();

    return (
        <MgCard heading={text} infoText={newText} externalHeading={externalHeading} buttons={buttons}>{renderContent()}</MgCard>
    )

    function renderContent() {
        return (
            <Center>
                <Stack gap="4" w="500px" justifyContent="center">
                    <MgSelect options={frameworks} placeholder="Select framework" label="Controlled selector" onSelect={setSelectedValue} value={selectedValue} />
                    <MgSelect options={frameworks} placeholder="Select framework" label="Default constant value" value="angular" />
                    <MgSelect options={frameworks} placeholder="Select framework" label="Only logging selector" onSelect={console.log} />
                    <MgSelect options={frameworks} placeholder="Select framework" label="Select framework" invalid={true}/>
                    <MgSelect options={frameworks} placeholder="Select framework" label="Select framework" />
                </Stack>
            </Center>
        )
    }
};
