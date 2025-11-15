import TableLayout from "@/components/layouts/TableLayout";
import { TreatmentHistoryList } from "@/features/treatmentHistory";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface TreatmentHistoryPageProps {
    placeholder?: string;
}

const TreatmentHistoryPage = ({ placeholder }: TreatmentHistoryPageProps): JSX.Element => (
    <TableLayout>
        <Box>
            <TreatmentHistoryList />
        </Box>
    </TableLayout>
);

export default TreatmentHistoryPage;
