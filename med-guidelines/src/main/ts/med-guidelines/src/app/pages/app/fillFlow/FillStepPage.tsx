import CardLayout from "@/components/layouts/CardLayout";
import { FillStepCard } from "@/features/fillStep";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface FillStepPageProps {
    placeholder?: string;
}

const FillStepPage = ({ placeholder }: FillStepPageProps): JSX.Element => (
    <CardLayout>
        <Box>
            <FillStepCard />
        </Box>
    </CardLayout>
);

export default FillStepPage;
