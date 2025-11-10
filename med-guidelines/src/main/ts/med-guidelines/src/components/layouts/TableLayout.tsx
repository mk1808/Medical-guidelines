import { type JSX, type ReactNode } from "react";
import NavBar from "../ui/navBar/NavBar";
import Footer from "../ui/Footer";
import { Box } from "@chakra-ui/react";
interface TableLayoutProps {
    children: ReactNode
}

const TableLayout = ({ children }: TableLayoutProps): JSX.Element => (
    <>
        <NavBar />
        <Box minHeight={"calc(100vh - 345px)"}>
            {children}
        </Box>
        <Footer />
    </>
);

export default TableLayout;
