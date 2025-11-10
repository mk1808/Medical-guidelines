import { type JSX, type ReactNode } from "react";
import NavBar from "../ui/navBar/NavBar";
import Footer from "../ui/Footer";
import { Box, Flex } from "@chakra-ui/react";
interface TableLayoutProps {
    children: ReactNode
}

const TableLayout = ({ children }: TableLayoutProps): JSX.Element => (
    <>
        <NavBar />
        <Box minHeight={"calc(100vh - 345px)"}>
            <Box h="100%" pt="10px">
                <Flex justify="center" align="center" h="100%">
                    {children}
                </Flex>
            </Box>
        </Box>
        <Footer />
    </>
);

export default TableLayout;
