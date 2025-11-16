import { MgCard, MgCheckbox, MgHeading, MgInput, MgTextarea } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { Center, Stack } from "@chakra-ui/react";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";

interface NewStepCardProps {
    placeholder?: string;
}

export const NewStepCard = ({ placeholder }: NewStepCardProps): JSX.Element => {

    const { t } = useTranslation();
    const stepNo = 1;
    const heading: string = `${t("step")} ${stepNo}`
    const [stepName, setStepName] = useState<string>();
    const [stepDescription, setStepDescription] = useState<string>();
    const [flowVersion, setFlowVersion] = useState<string>();

    const buttons: ActionButtonProps[] = [
        { onClick: () => console.log("cancel"), title: t("cancel"), variant: "outline" },
        { onClick: () => console.log("next", stepName, stepDescription, flowVersion), title: t("next") },
    ];

    return (
        <MgCard heading={heading} externalHeading={t("newStep")} buttons={buttons}>
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (
            <Center>
                <Stack gap="4" w="500px" justifyContent="center" >
                    <MgInput label={t("stepName")} value={stepName} onValueChange={setStepName} />
                    <MgTextarea label={t("stepDescription")} value={stepDescription} onValueChange={setStepDescription} />
                    <MgCheckbox text={t("isLastStep")} />
                    <MgHeading text={t('parameters')} size='md' withSeparator />
                    <MgHeading text={t('nextSteps')} size='md' withSeparator />
                </Stack>
            </Center>
        )
    }
};