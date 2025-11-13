import { Box, List } from "@chakra-ui/react";
import { type JSX } from "react";

interface MgListProps {
    items: string[];
    type?: "ol" | "ul"
}

export const MgList = ({ items, type = "ul" }: MgListProps): JSX.Element => {

    return (
        <Box paddingLeft="20px">
            <List.Root as={type} >
                {items.map((item) => (
                    <List.Item key={item}>{item}</List.Item>
                ))}
            </List.Root>
        </Box>
    );
}

export default MgList;