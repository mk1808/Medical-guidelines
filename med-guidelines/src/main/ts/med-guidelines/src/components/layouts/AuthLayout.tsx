import { type JSX, type ReactNode } from "react";
import Footer from "../ui/Footer";
import { Box, Flex } from "@chakra-ui/react";
interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => (
    <>
        <Box minHeight={"calc(100vh - 250px)"}>
            <Box h="100%" pt="80px">
                <Flex justify="center" align="center" h="100%">
                    {children}
                </Flex>
            </Box>
        </Box>
        <Footer />
    </>
);

export default AuthLayout;
