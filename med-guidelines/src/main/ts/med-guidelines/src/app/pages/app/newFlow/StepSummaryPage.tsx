import CardLayout from "@/components/layouts/CardLayout";
import { StepSummaryCard } from "@/features/stepSummary";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface StepSummaryPageProps {
    placeholder?: string;
}

const StepSummaryPage = ({ placeholder }: StepSummaryPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <StepSummaryCard />
        </Box>
    </CardLayout>

);

export default StepSummaryPage;
