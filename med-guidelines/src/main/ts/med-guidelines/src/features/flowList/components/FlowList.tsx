import { MgTable } from "@/components/ui";
import type { Flow, MgTableColumn } from "@/types/interfaces";
import { formatDate } from "@/utils/dateUtils";
import { Box } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { FlowListActions } from "./FlowListActions";

interface FlowListProps {
    placeholder?: string;
}

export const FlowList = ({ placeholder }: FlowListProps): JSX.Element => {

    const { t } = useTranslation();
    const { role } = useParams();
    const isAdmin: boolean = role === "admin";

    const heading = t("availableFlows");
    const click = (item: Flow) => console.log(item);
    const columnForAdmin: MgTableColumn<Flow> = useMemo(() => ({ name: "actions", key: "actions", render: renderActionButtons }), []);
    const standardColumns: MgTableColumn<Flow>[] = useMemo(() => [
        { name: "disease", key: "disease" },
        { name: "flowName", key: "name" },
        { name: "flowVersion", key: "version" },
        { name: "created", key: "created", render: (item: Flow) => formatDate(item.created) },
        { name: "author", key: "author" },
        { name: "updated", key: "updated", render: (item: Flow) => formatDate(item.updated) }
    ], []);

    const columns: MgTableColumn<Flow>[] = useMemo(() => {
        return isAdmin ? [...standardColumns, columnForAdmin] : standardColumns;
    }, [isAdmin, columnForAdmin, standardColumns]);

    const tableItems: Flow[] = [
        { id: "11", name: "New flow", disease: "Breast cancer", version: "2025.04", created: new Date(), updated: new Date(), author: "jan.kowalski@gmail.com" },
        { id: "22", name: "Fixed flow", disease: "Breast cancer", version: "2025.04", created: new Date(), updated: new Date(), author: "jan.kowalski@gmail.com" },
        { id: "33", name: "New flow", disease: "Lung cancer", version: "2025.05", created: new Date(), updated: new Date(), author: "jan.kowalski@gmail.com" },
    ];

    const open = (event: React.MouseEvent<HTMLButtonElement>, item: Flow) => { event.stopPropagation(); console.log("open" + item.id) }
    const deleteF = (event: React.MouseEvent<HTMLButtonElement>, item: Flow) => { event.stopPropagation(); console.log("delete" + item.id) }
    const edit = (event: React.MouseEvent<HTMLButtonElement>, item: Flow) => { event.stopPropagation(); console.log("edit" + item.id) }
    const copy = (event: React.MouseEvent<HTMLButtonElement>, item: Flow) => { event.stopPropagation(); console.log("copy" + item.id) }
    const checkHistory = (event: React.MouseEvent<HTMLButtonElement>, item: Flow) => { event.stopPropagation(); console.log("checkHistory" + item.id) }
    return (
        <Box w="1500px">
            <MgTable
                items={tableItems}
                columns={columns}
                externalHeading={heading}
                showRowNumber={true}
                onClick={(item) => click(item)} />
        </Box>
    )

    function renderActionButtons(item: Flow) {
        return <FlowListActions
            open={(e) => open(e, item)}
            edit={(e) => edit(e, item)}
            deleteF={(e) => deleteF(e, item)}
            copy={(e) => copy(e, item)}
            checkHistory={(e) => checkHistory(e, item)} />
    }
};
