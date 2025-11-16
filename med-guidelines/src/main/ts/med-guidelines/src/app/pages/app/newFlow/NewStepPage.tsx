import CardLayout from "@/components/layouts/CardLayout";
import { NewStepCard } from "@/features/newStep";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface NewStepPageProps {
    placeholder?: string;
}

const NewStepPage = ({ placeholder }: NewStepPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <NewStepCard />
        </Box>
    </CardLayout>
);

export default NewStepPage;
