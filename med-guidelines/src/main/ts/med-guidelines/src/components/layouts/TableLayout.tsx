import { type JSX, type ReactNode } from "react";
import NavBar from "../ui/navBar/NavBar";
import Footer from "../ui/Footer";
import { Flex } from "@chakra-ui/react";
interface TableLayoutProps {
    children: ReactNode
}

const TableLayout = ({ children }: TableLayoutProps): JSX.Element => (
    <>
        <NavBar />
        <Flex justify="center" align="center" minHeight={"calc(100vh - 345px)"}>
            {children}
        </Flex>
        <Footer />
    </>
);

export default TableLayout;
