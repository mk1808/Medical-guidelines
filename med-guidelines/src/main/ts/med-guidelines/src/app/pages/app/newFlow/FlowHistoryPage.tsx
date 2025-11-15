import TableLayout from "@/components/layouts/TableLayout";
import { FlowHistory } from "@/features/flowHistory";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface FlowHistoryPageProps {
    placeholder?: string;
}

const FlowHistoryPage = ({ placeholder }: FlowHistoryPageProps): JSX.Element => (
    <TableLayout>
        <Box>
            <FlowHistory />
        </Box>
    </TableLayout>
);

export default FlowHistoryPage;
