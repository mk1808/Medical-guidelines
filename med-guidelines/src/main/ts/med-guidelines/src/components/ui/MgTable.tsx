import type { callbackFn } from "@/types/types";
import { Box, Stack, Table } from "@chakra-ui/react";
import { type JSX, type ReactNode } from "react";
import MgText from "./MgText";
import MgHeading from "./MgHeading";
import type { MgTableColumn } from "@/types/interfaces";
import { useTranslation } from "react-i18next";
import './styles.scss'

interface MgTableProps<T extends { id: string }> {
    items: T[];
    columns: MgTableColumn<T>[];
    onClick?: callbackFn<T>;
    size?: "sm" | "md" | "lg";
    externalHeading?: string;
    showRowNumber?: boolean
}

export const MgTable = <T extends { id: string },>({ items, columns, onClick, size = "lg", externalHeading, showRowNumber = false }: MgTableProps<T>): JSX.Element => {
    const { t } = useTranslation();

    const getCellContent = (item: T, col: MgTableColumn<T>): ReactNode => {
        if (col.render != null) {
            return col.render(item)
        }
        type Key = keyof typeof item;
        return <MgText text={item[col.key as Key] as string} />
    }

    const onRowClick = (item: T) => onClick?.(item);

    return (
        <Stack>
            {renderExternalHeading()}
            <Table.Root size={size} variant="outline" interactive>
                <Table.Header>
                    <Table.Row>
                        {showRowNumber && renderIndexColHeader()}
                        {columns.map((col) => renderColHeader(col))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {items.map((item, index: number) => renderRow(item, index))}
                </Table.Body>
            </Table.Root>
        </Stack>
    )


    function renderColHeader({ name, align = "start" }: MgTableColumn<T>) {
        return <Table.ColumnHeader textAlign={align} key={name}>{t(name)}</Table.ColumnHeader>
    }

    function renderIndexColHeader() {
        return <Table.ColumnHeader textAlign="start" key="index" />
    }

    function renderRow(item: T, index: number) {
        return (
            <Table.Row className={onClick ? "row-pointer" : ""} key={item.id} onClick={() => onRowClick(item)}>
                {showRowNumber && renderIndex(index)}
                {columns.map((col) => renderCell(item, col))}
            </Table.Row>
        )
    }

    function renderIndex(index: number) {
        return (
            <Table.Cell textAlign="start" key={index}>
                {index + 1}
            </Table.Cell>
        )
    }

    function renderCell(item: T, col: MgTableColumn<T>) {
        return (
            <Table.Cell textAlign={col.align} key={col.key}>
                {getCellContent(item, col)}
            </Table.Cell>
        )
    }

    function renderExternalHeading() {
        return externalHeading != null && (
            <Box width={size} mb={1}>
                <MgHeading text={externalHeading} firstUppercase />
            </Box>
        )
    }
}

export default MgTable;
