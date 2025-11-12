import type { callbackFn } from "@/types/types";
import { Field, Input } from "@chakra-ui/react";
import { useRef, type ChangeEvent, type JSX } from "react";

interface MgInputProps {
    placeholder?: string;
    label: string;
    value?: string;
    onValueChange?: callbackFn<string>;
    invalid?: boolean
    type?: "text" | "number" | "password"
}

export const MgInput = ({
    placeholder,
    label,
    value,
    onValueChange,
    invalid,
    type = "text"
}: MgInputProps): JSX.Element => {

    const valueChangeTimeout = useRef<number>(null);

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        if (onValueChange) {
            if (valueChangeTimeout.current) {
                clearTimeout(valueChangeTimeout.current);
            }
            valueChangeTimeout.current = setTimeout(() => onValueChange(event.target.value), 500);
        }
    }

    return (
        <Field.Root invalid={invalid}>
            <Field.Label>{label}</Field.Label>
            <Input
                placeholder={placeholder}
                variant="outline"
                type={type}
                defaultValue={value}
                onChange={onChange}
            />
        </Field.Root>
    )
}

export default MgInput;