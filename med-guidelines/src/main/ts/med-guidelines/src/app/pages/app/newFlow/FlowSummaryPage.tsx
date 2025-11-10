import CardLayout from "@/components/layouts/CardLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface FlowSummaryPageProps {
    placeholder?: string;
}

const FlowSummaryPage = ({ placeholder }: FlowSummaryPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <h1>FlowSummaryPage component</h1>
            {placeholder}
        </Box>
    </CardLayout>
);

export default FlowSummaryPage;
