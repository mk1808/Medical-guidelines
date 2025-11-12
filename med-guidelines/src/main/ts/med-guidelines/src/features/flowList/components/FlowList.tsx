import { MgTable } from "@/components/ui";
import { Box, Button } from "@chakra-ui/react";
import { type JSX } from "react";
import { useTranslation } from "react-i18next";

interface FlowListProps {
    placeholder?: string;
}

export const FlowList = ({ placeholder }: FlowListProps): JSX.Element => {

    const { t } = useTranslation();
    const heading = t("availableFlows");

    const tableColumns: any[] = [
        { name: "Product", key: "name" },
        { name: "Category", key: "category" },
        { name: "Price", key: "price", align: "end" },
        { name: "Info", key: "info", align: "end", render: (item) => <Button onClick={(event) => { console.log("buttonClicked", item); event.stopPropagation(); }}>Info</Button> }
    ];

    const tableItems = [
        { key: "1", name: "Laptop", category: "Electronics", price: 999.99 },
        { key: "2", name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
        { key: "3", name: "Desk Chair", category: "Furniture", price: 150.0 },
        { key: "4", name: "Smartphone", category: "Electronics", price: 799.99 },
        { key: "5", name: "Headphones", category: "Accessories", price: 199.99 },
    ];
    return (
        <Box w="1500px">
            <MgTable 
                items={tableItems} 
                columns={tableColumns} 
                externalHeading={heading}
                onClick={(item) => console.log(item)} />
        </Box>
    )
};
