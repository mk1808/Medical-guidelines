import { type JSX, type ReactNode } from "react";
import NavBar from "../ui/navBar/NavBar";
import Footer from "../ui/Footer";
import { Box } from "@chakra-ui/react";
interface CardLayoutProps {
    children: ReactNode
}

const CardLayout = ({ children }: CardLayoutProps): JSX.Element => (
    <>
        <NavBar />
        <Box minHeight={"calc(100vh - 345px)"}>
            {children}
        </Box>
        <Footer />
    </>
);

export default CardLayout;
