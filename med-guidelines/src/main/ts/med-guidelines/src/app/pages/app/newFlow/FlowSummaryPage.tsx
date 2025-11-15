import CardLayout from "@/components/layouts/CardLayout";
import { FlowSummaryCard } from "@/features/flowSummary";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface FlowSummaryPageProps {
    placeholder?: string;
}

const FlowSummaryPage = ({ placeholder }: FlowSummaryPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <FlowSummaryCard />
        </Box>
    </CardLayout>
);

export default FlowSummaryPage;
