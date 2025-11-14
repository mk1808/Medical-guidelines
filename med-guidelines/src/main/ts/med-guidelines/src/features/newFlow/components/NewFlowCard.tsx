import { MgCard, MgInput } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { Center, Stack } from "@chakra-ui/react";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";

interface NewFlowCardProps {
    placeholder?: string;
}

export const NewFlowCard = ({ placeholder }: NewFlowCardProps): JSX.Element => {

    const { t } = useTranslation();
    const [flowName, setFlowName] = useState<string>();
    const [disease, setDisease] = useState<string>();
    const [flowVersion, setFlowVersion] = useState<string>();

    const buttons: ActionButtonProps[] = [
        { onClick: () => console.log("cancel"), title: t("cancel"), variant: "outline" },
        { onClick: () => console.log("next", flowName, disease, flowVersion), title: t("next") },
    ];

    return (
        <MgCard heading={t("generalInformation")} externalHeading={t("newFlow")} buttons={buttons}>
            {renderContent()}
        </MgCard>
    )

    function renderContent() {
        return (
            <Center>
                <Stack gap="4" w="500px" justifyContent="center" >
                    <MgInput label={t("flowName")} value={flowName} onValueChange={setFlowName} />
                    <MgInput label={t("disease")} value={disease} onValueChange={setDisease} />
                    <MgInput label={t("flowVersion")} value={flowVersion} onValueChange={setFlowVersion} />
                </Stack>
            </Center>
        )
    }
};