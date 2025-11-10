import { type JSX, type ReactNode } from "react";
import Footer from "../ui/Footer";
import { Box } from "@chakra-ui/react";
interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps): JSX.Element => (
    <>
        <Box minHeight={"calc(100vh - 250px)"}>
            {children}
        </Box>
        <Footer />
    </>
);

export default AuthLayout;
