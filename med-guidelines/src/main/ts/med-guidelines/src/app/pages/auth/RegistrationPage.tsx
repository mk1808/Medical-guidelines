import { Box } from "@chakra-ui/react";
import { type JSX } from "react";

interface RegistrationPageProps {
    placeholder?: string;
}

const RegistrationPage = ({ placeholder }: RegistrationPageProps): JSX.Element => (
    <Box>
        <h1>RegistrationPage component</h1>
        {placeholder}
    </Box>
);

export default RegistrationPage;
