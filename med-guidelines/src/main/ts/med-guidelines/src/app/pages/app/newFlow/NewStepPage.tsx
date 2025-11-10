import CardLayout from "@/components/layouts/CardLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface NewStepPageProps {
    placeholder?: string;
}

const NewStepPage = ({ placeholder }: NewStepPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <h1>NewStepPage component</h1>
            {placeholder}
        </Box>
    </CardLayout>
);

export default NewStepPage;
