import CardLayout from "@/components/layouts/CardLayout";
import { ProposedTreatmentCard } from "@/features/proposedTreatment";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";

interface ProposedTreatmentPageProps {
    placeholder?: string;
}

const ProposedTreatmentPage = ({ placeholder }: ProposedTreatmentPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <ProposedTreatmentCard />
        </Box>
    </CardLayout>
);

export default ProposedTreatmentPage;
