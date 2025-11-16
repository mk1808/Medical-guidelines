import { MgCard, MgCheckbox, MgHeading, MgInput, MgTextarea } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { Center, Container, Stack } from "@chakra-ui/react";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { AddParametersSection } from "./AddParametersSection";
import { AddNextStepsSection } from "./AddNextStepsSection";
import { useRouterNavigate } from "@/hooks";

interface NewStepCardProps {
    placeholder?: string;
}

export const NewStepCard = ({ placeholder }: NewStepCardProps): JSX.Element => {

    const { t } = useTranslation();
    const { navigate } = useRouterNavigate();
    const stepNo = 1;
    const heading: string = `${t("step")} ${stepNo}`
    const [stepName, setStepName] = useState<string>();
    const [stepDescription, setStepDescription] = useState<string>();

    const buttons: ActionButtonProps[] = [
        { onClick: () => navigate("back"), title: t("prev"), variant: "outline" },
        { onClick: () => { console.log("next", stepName, stepDescription); navigate("stepSummary")}, title: t("next") },
    ];

    return (
        <MgCard heading={heading} externalHeading={t("newStep")} buttons={buttons}>
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (
            <Container>


                <Center>
                    <Stack gap="4" w="500px" justifyContent="center" >
                        <MgInput label={t("stepName")} value={stepName} onValueChange={setStepName} />
                        <MgTextarea label={t("stepDescription")} value={stepDescription} onValueChange={setStepDescription} />
                        <MgCheckbox text={t("isLastStep")} />
                        <MgHeading text={t('parameters')} size='md' withSeparator />
                        <AddParametersSection />
                        
                        
                    </Stack>
                </Center>
                <Center mt="4">
                    <Stack gap="4" w="900px">
                        <MgHeading text={t('nextSteps')} size='md' withSeparator />
                        <AddNextStepsSection />
                        </Stack>
                </Center>
            </Container>
        )
    }
};