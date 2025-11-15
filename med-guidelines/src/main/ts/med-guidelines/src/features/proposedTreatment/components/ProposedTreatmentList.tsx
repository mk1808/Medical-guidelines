import { MgList, MgText } from "@/components/ui";
import { Box, Stack } from "@chakra-ui/react";
import { type JSX } from "react";

interface ProposedTreatmentListProps {
    treatmentSteps: string[],
    infoText: string;
}

export const ProposedTreatmentList = ({ treatmentSteps, infoText }: ProposedTreatmentListProps): JSX.Element => {

    return (
        <Stack gap={0}>
            <Stack mb="4">
                <MgText text={infoText} />
            </Stack>
            <Box ml="20px">
                <MgList items={treatmentSteps} />
            </Box>
        </Stack>
    )

};
