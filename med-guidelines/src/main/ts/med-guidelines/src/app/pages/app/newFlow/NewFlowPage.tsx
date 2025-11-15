import CardLayout from "@/components/layouts/CardLayout";
import { NewFlowCard } from "@/features/newFlow";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface NewFlowPageProps {
    placeholder?: string;
}

const NewFlowPage = ({ placeholder }: NewFlowPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <NewFlowCard />
        </Box>
    </CardLayout>
);

export default NewFlowPage;
