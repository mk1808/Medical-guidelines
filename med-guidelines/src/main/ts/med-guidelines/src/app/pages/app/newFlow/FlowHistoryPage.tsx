import TableLayout from "@/components/layouts/TableLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface FlowHistoryPageProps {
    placeholder?: string;
}

const FlowHistoryPage = ({ placeholder }: FlowHistoryPageProps): JSX.Element => (
    <TableLayout>
        <Box>
            <h1>FlowHistoryPage component</h1>
            {placeholder}
        </Box>
    </TableLayout>
);

export default FlowHistoryPage;
