import CardLayout from "@/components/layouts/CardLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface StepSummaryPageProps {
    placeholder?: string;
}

const StepSummaryPage = ({ placeholder }: StepSummaryPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <h1>StepSummaryPage component</h1>
            {placeholder}
        </Box>
    </CardLayout>

);

export default StepSummaryPage;
