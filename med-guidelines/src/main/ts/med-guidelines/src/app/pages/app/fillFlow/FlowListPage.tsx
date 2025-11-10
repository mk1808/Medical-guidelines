import TableLayout from "@/components/layouts/TableLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface FlowListPageProps {
    placeholder?: string;
}

const FlowListPage = ({ placeholder }: FlowListPageProps): JSX.Element => (
    <TableLayout>
        <Box>
            <h1>FlowListPage component</h1>
            {placeholder}
        </Box>
    </TableLayout>
);

export default FlowListPage;
