import type { callbackFn } from "@/types/types";
import { Field, Textarea } from "@chakra-ui/react";
import { useRef, type ChangeEvent, type JSX } from "react";

interface MgTextareaProps {
    placeholder?: string;
    label: string;
    value?: string;
    onValueChange?: callbackFn<string>;
    invalid?: boolean;
}

export const MgTextarea = ({
    placeholder,
    label,
    value,
    onValueChange,
    invalid
}: MgTextareaProps): JSX.Element => {

    const valueChangeTimeout = useRef<number>(null);

    function onChange(event: ChangeEvent<HTMLTextAreaElement>) {
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
            <Textarea
                placeholder={placeholder}
                variant="outline"
                defaultValue={value}
                onChange={onChange}
            />
        </Field.Root>
    )
}

export default MgTextarea;

    
    
    
    
    
    
    
    
    
 