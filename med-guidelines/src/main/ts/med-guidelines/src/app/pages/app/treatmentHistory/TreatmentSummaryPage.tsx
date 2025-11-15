import CardLayout from "@/components/layouts/CardLayout";
import { TreatmentSummaryCard } from "@/features/treatmentSummary";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface TreatmentSummaryPageProps {
    placeholder?: string;
}

const TreatmentSummaryPage = ({ placeholder }: TreatmentSummaryPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <TreatmentSummaryCard/>
        </Box>
    </CardLayout>
);

export default TreatmentSummaryPage;
