import TableLayout from "@/components/layouts/TableLayout";
import { FlowList } from "@/features/flowList";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface FlowListPageProps {
    placeholder?: string;
}

const FlowListPage = ({ placeholder }: FlowListPageProps): JSX.Element => (
    <TableLayout>
        <Box>
            <FlowList />
        </Box>
    </TableLayout>
);

export default FlowListPage;
