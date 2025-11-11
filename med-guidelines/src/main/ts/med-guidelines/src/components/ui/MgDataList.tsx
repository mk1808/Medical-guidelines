import { DataList } from "@chakra-ui/react";
import { type JSX } from "react";

interface MgDataListProps {
    items?: { label: string, value: string }[];
}

export const MgDataList = ({ items = [] }: MgDataListProps): JSX.Element => {

    return (
        <DataList.Root orientation="horizontal" size="lg" variant="bold" >
            {items.map((item) => (
                <DataList.Item key={item.label}>
                    <DataList.ItemLabel>{item.label}:</DataList.ItemLabel>
                    <DataList.ItemValue>{item.value}</DataList.ItemValue>
                </DataList.Item>
            ))}
        </DataList.Root>
    );
}

export default MgDataList;