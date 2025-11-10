import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { } from "lucide-react";
import { type JSX } from "react";

interface FooterProps {
    placeholder?: string;
}

const Footer = ({ placeholder }: FooterProps): JSX.Element => (
    <div>
        <Box background="primary" width="100%" height="200px" padding="4" color="white">
            <Flex direction="column" gap="8">
                <Flex gap="4" justify="flex-end">
                    <Box height="36" width="200px" >
                        <Heading mb="6">Kontakt</Heading>
                        <Text>iimo.pl</Text>
                    </Box>
                    <Box height="36" width="200px">
                        <Heading mb="6">Podstrony</Heading>
                        <Text mb="2">Dostępne flow</Text>
                        <Text>Historia leczenia</Text>
                    </Box>
                </Flex>
            </Flex>

        </Box>
        <Box background="secondary.50" width="100%" height="50px" padding="4" >
            <Center><Text>International Institute for Molecular Oncology &#169; 2025</Text></Center>
        </Box>
    </div>
);

export default Footer;