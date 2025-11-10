import { type JSX, type ReactNode } from "react";
import Footer from "../ui/Footer";
import { Box, Flex } from "@chakra-ui/react";
interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => (
    <>
        <Flex justify="center" align="center" minHeight={"calc(100vh - 250px)"}>
            {children}
        </Flex>
        <Footer />
    </>
);

export default AuthLayout;
