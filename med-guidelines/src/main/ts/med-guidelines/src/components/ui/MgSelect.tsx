import type { SelectValueProps } from "@/types/interfaces";
import type { callbackFn } from "@/types/types";
import { createListCollection, Field, Portal, Select } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";

interface MgSelectProps<T> {
    options: SelectValueProps<T>[];
    placeholder?: string;
    label: string;
    value?: string;
    onSelect?: callbackFn<T>;
    invalid?: boolean
}

export const MgSelect = <T,>({
    options,
    placeholder = "",
    label,
    value,
    onSelect,
    invalid
}: MgSelectProps<T>): JSX.Element => {

    const optionsCollection = useMemo(() => createListCollection({ items: options }), [options]);

    const onValueSelect = (selectedItems: SelectValueProps<T>[]) => onSelect && selectedItems.length > 0 && onSelect(selectedItems[0].value)

    return (
        <Field.Root>
            <Field.Label>{label}</Field.Label>
            <Select.Root
                collection={optionsCollection}
                value={value ? [value] : []}
                onValueChange={(e) => onValueSelect(e.items)}
                invalid={invalid}
            >
                <Select.HiddenSelect />
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder={placeholder} />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {optionsCollection.items.map((option) => (
                                <Select.Item item={option} key={option.key}>
                                    {option.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
        </Field.Root>
    )
}

export default MgSelect;