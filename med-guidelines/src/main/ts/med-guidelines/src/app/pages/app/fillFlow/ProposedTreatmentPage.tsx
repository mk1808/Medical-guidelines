import CardLayout from "@/components/layouts/CardLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface ProposedTreatmentPageProps {
    placeholder?: string;
}

const ProposedTreatmentPage = ({ placeholder }: ProposedTreatmentPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <h1>ProposedTreatmentPage component</h1>
            {placeholder}
        </Box>
    </CardLayout>
);

export default ProposedTreatmentPage;
