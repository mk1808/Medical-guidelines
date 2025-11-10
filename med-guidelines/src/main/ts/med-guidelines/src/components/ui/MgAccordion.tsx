import { Accordion, Span } from "@chakra-ui/react";
import { type JSX } from "react";

interface MgAccordionProps {
    items?: { label: string, value: string }[];
}

export const MgAccordion = ({ items = [] }: MgAccordionProps): JSX.Element => {

    return (
        <Accordion.Root multiple size="lg" variant="enclosed">
            {items.map((item, index) => (
                <Accordion.Item key={index} value={item.value}>
                    <Accordion.ItemTrigger>
                        <Span flex="1">{item.label}</Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>{item.value}</Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
}

export default MgAccordion;