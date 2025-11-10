import CardLayout from "@/components/layouts/CardLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface NewFlowPageProps {
    placeholder?: string;
}

const NewFlowPage = ({ placeholder }: NewFlowPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <h1>NewFlowPage component</h1>
            {placeholder}
        </Box>
    </CardLayout>
);

export default NewFlowPage;
