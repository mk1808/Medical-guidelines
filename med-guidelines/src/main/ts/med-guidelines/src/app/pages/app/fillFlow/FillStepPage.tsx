import CardLayout from "@/components/layouts/CardLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface FillStepPageProps {
    placeholder?: string;
}

const FillStepPage = ({ placeholder }: FillStepPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <h1>FillStepPage component</h1>
            {placeholder}
        </Box>
    </CardLayout>
);

export default FillStepPage;
