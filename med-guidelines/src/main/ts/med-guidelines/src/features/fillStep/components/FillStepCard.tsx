import { MgCard } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { Center, createListCollection, Field, Input, Portal, Select, Stack } from "@chakra-ui/react";
import { type JSX } from "react";
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
    const frameworks = createListCollection({
        items: [
            { label: "React.js", value: "react" },
            { label: "Vue.js", value: "vue" },
            { label: "Angular", value: "angular" },
            { label: "Svelte", value: "svelte" },
        ],
    })

    return (
        <MgCard heading={text} infoText={newText} externalHeading={externalHeading} buttons={buttons}>{renderContent()}</MgCard>
    )

    function renderContent() {
        return (
            <Center>
                <Stack gap="4" w="500px" justifyContent="center">
                    {renderSelect()}
                    {renderSelect()}
                    {renderSelect()}
                    {renderSelect()}
                </Stack>
            </Center>
        )
    }

    function renderSelect() {
        return (
            <Field.Root mb="3" w="100%">
                <Field.Label>First Name</Field.Label>
                <Select.Root collection={frameworks} size="sm" w="100%">
                    <Select.HiddenSelect />
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Select framework" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {frameworks.items.map((framework) => (
                                    <Select.Item item={framework} key={framework.value}>
                                        {framework.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
            </Field.Root>
        )
    }
};
