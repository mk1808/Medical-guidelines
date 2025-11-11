import type { voidFn } from "@/types/types";
import { Box, Button, DataList, For, Stack, Table } from "@chakra-ui/react";
import { type JSX } from "react";

interface MgTableProps {
    items?: any[],
    columns?: any[],
    onClick?: voidFn
}

export const MgTable = ({ items = [] }: MgTableProps): JSX.Element => {
    const columns = [{ name: "Product", key: "name", isAlignEnd: false }, { name: "Category", key: "category", isAlignEnd: false }, { name: "Price", key: "price", isAlignEnd: true },
    { name: "Info", key: "info", isAlignEnd: true, render: () => <Button>Info</Button> }
    ]
    const items1 = [
        { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
        { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
        { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
        { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
        { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
    ]

    const getCellContent = (item, col: any) => {
        if (col.render != null) {
            return col.render()
        }
        return renderCell(item, col);
    }

    return (
        <Box w="1500px">
            {renderTable()}
        </Box>
    );



    function renderTable() {
        return (
            <Table.Root size="lg" variant="outline" interactive>
                <Table.Header>
                    <Table.Row>
                        {columns.map((col: any) => renderColHeader(col))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {items1.map((item) => (
                        <Table.Row key={item.id}>
                            {columns.map((col: any) => getCellContent(item, col))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        )
    }

    function renderColHeader({ name, isAlignEnd }) {
        return <Table.ColumnHeader textAlign={isAlignEnd ? "end" : ""} >{name}</Table.ColumnHeader>
    }

    function renderCell(item, col: any) {
        type Key = keyof typeof col.key;
        const value = item[col.key as Key]
        return <Table.Cell textAlign={col.isAlignEnd ? "end" : ""} >
            
            {value}
            
            </Table.Cell>
    }


}

export default MgTable;