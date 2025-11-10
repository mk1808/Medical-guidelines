import CardLayout from "@/components/layouts/CardLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface TreatmentSummaryPageProps {
    placeholder?: string;
}

const TreatmentSummaryPage = ({ placeholder }: TreatmentSummaryPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <h1>TreatmentSummaryPage component</h1>
            {placeholder}
        </Box>
    </CardLayout>
);

export default TreatmentSummaryPage;
