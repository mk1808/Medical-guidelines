import type { callbackFn } from "@/types/types";
import { Table } from "@chakra-ui/react";
import { type JSX, type ReactNode } from "react";
import MgText from "./MgText";

interface MgTableColumn<T> {
    name: string;
    key?: string;
    align?: "start" | "end" | "center";
    render?: (item: T) => ReactNode;
}

interface MgTableProps<T extends { key: string }> {
    items: T[];
    columns: MgTableColumn<T>[];
    onClick?: callbackFn;
    size?: "sm" | "md" | "lg";
}

export const MgTable = <T extends { key: string },>({ items, columns, onClick, size = "lg" }: MgTableProps<T>): JSX.Element => {

    const getCellContent = (item: T, col: MgTableColumn<T>): ReactNode => {
        if (col.render != null) {
            return col.render(item)
        }
        type Key = keyof typeof item;
        return <MgText text={item[col.key as Key] as string} />
    }

    const onRowClick = (item: T) => onClick && onClick(item);

    return (
        <Table.Root size={size} variant="outline" interactive>
            <Table.Header>
                <Table.Row>
                    {columns.map((col) => renderColHeader(col))}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {items.map((item) => renderRow(item))}
            </Table.Body>
        </Table.Root>
    )


    function renderColHeader({ name, align = "start" }: MgTableColumn<T>) {
        return <Table.ColumnHeader textAlign={align} key={name}>{name}</Table.ColumnHeader>
    }

    function renderRow(item: T) {
        return (
            <Table.Row key={item.key} onClick={() => onRowClick(item)}>
                {columns.map((col) => renderCell(item, col))}
            </Table.Row>
        )
    }

    function renderCell(item: T, col: MgTableColumn<T>) {
        return (
            <Table.Cell textAlign={col.align} key={col.key}>
                {getCellContent(item, col)}
            </Table.Cell>
        )
    }
}

export default MgTable;
