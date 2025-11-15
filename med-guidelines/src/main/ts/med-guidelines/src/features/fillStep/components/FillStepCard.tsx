import { MgCard, MgSelect } from "@/components/ui";
import type { ActionButtonProps, FlowStepParameter } from "@/types/interfaces";
import { formCardExternalHeading } from "@/utils/cardUtils";
import { Center, Stack } from "@chakra-ui/react";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { useSteps } from "../hooks/useSteps";
import { useParams } from "react-router";
import { useRouterNavigate } from "@/hooks";

export const FillStepCard = (): JSX.Element => {

    const { t } = useTranslation();

    const { navigate } = useRouterNavigate();
    const { getStep } = useSteps();
    const { stepId } = useParams();
    const [selectedValues, setSelectedValues] = useState<Map<string, string>>(new Map());

    const step = getStep(Number(stepId) || 0);
    const text = [`${t("step")} ${step.id}`, step.name];
    const externalHeading = formCardExternalHeading({ flowName: "X", disease: "lung cancer", version: "2025.04.1" });

    const buttons: ActionButtonProps[] = [
        { onClick: navigateBack, title: t("prev"), variant: "outline" },
        { onClick: navigateNextPage, title: t("next") },
    ]

    function navigateBack() {
        navigate("back")
    }

    function navigateNextPage() {
        if (isNaN(Number(step.nextStep))) {
            navigate("proposedTreatment")
        } else {
            navigate("flowStep", { stepId: step.nextStep })
        }
    }

    function onValueSelect(parameter: FlowStepParameter, value: string) {
        setSelectedValues(values => {
            values.set(parameter.name, value)
            return new Map(values)
        });
    }

    return (
        <MgCard heading={text} infoText={step.description} externalHeading={externalHeading} buttons={buttons}>{renderContent()}</MgCard>
    )

    function renderContent() {
        return (
            <Center>
                <Stack gap="4" w="500px" justifyContent="center">
                    {step.parameters.map(renderParameterSelect)}
                </Stack>
            </Center>
        )
    }

    function renderParameterSelect(parameter: FlowStepParameter) {
        return (
            <MgSelect
                key={parameter.name}
                options={parameter.options}
                label={parameter.name}
                onSelect={value => onValueSelect(parameter, value)}
                value={selectedValues.get(parameter.name)}
            />
        )
    }
};
