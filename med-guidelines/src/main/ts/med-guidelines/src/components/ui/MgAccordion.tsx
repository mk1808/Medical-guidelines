import { Accordion, Span } from "@chakra-ui/react";
import { type JSX } from "react";
import MgText from "./MgText";

interface ItemType {
    id: number,
    label: string,
    value: React.ReactNode | string
}

interface MgAccordionProps {
    items?: ItemType[];
}

export const MgAccordion = ({ items = [] }: MgAccordionProps): JSX.Element => {

    return (
        <Accordion.Root multiple size="lg" variant="enclosed">
            {items.map((item) => (
                <Accordion.Item key={item.id} value={item.label}>
                    <Accordion.ItemTrigger _open={{ bg: "primary.muted" }}>
                        <Span flex="1">{item.label}</Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent mt="4">
                        <Accordion.ItemBody>{renderContent(item)}</Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );

    function renderContent(item: ItemType) {
        if (typeof item.value === "string") {
            return <MgText text={item.value} />
        }
        return item.value;
    }
}

export default MgAccordion;