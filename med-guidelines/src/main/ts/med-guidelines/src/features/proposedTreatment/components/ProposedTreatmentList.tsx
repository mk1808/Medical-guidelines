import { MgCard, MgList, MgText } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { formCardExternalHeading } from "@/utils/cardUtils";
import { Box, Stack } from "@chakra-ui/react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

interface ProposedTreatmentListProps {
    placeholder?: string;
}

export const ProposedTreatmentList = ({ placeholder }: ProposedTreatmentListProps): JSX.Element => {

    const { t } = useTranslation();

    const newText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius. "

    const treatmentSteps: string[] = [
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "Fusce sed vehicula urna",
        "Quisque tincidunt nibh quis velit ultricies",
        "et semper arcu eleifend"
    ];


    return (
        <Stack gap={0}>
            <Stack mb="4">
                <MgText text={newText} />
            </Stack>
            <Box ml="20px">
                <MgList items={treatmentSteps} />
            </Box>

        </Stack>

    )

};
