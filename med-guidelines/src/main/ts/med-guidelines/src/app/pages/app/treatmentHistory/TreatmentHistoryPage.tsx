import TableLayout from "@/components/layouts/TableLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface TreatmentHistoryPageProps {
    placeholder?: string;
}

const TreatmentHistoryPage = ({ placeholder }: TreatmentHistoryPageProps): JSX.Element => (
    <TableLayout>
        <Box>
            <h1>TreatmentHistoryPage component</h1>
            {placeholder}
        </Box>
    </TableLayout>
);

export default TreatmentHistoryPage;
