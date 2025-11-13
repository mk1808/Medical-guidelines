import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { useState, type JSX } from "react";
import MgText from "./MgText";


interface MgCheckboxProps {
    text: string,
    extraInfo?: string
}

export const MgCheckbox = ({ text, extraInfo }: MgCheckboxProps): JSX.Element => {

    const [checked, setChecked] = useState(false)
    return (
        <Checkbox.Root
            checked={checked}
            size="md"
            gap="4"
            alignItems="flex-start"
            onCheckedChange={(e) => setChecked(!!e.checked)}
        >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>
                <Stack gap="1">
                    <MgText text={text} size="sm" />
                    {renderExtraInfo()}
                </Stack>
            </Checkbox.Label>
        </Checkbox.Root>
    )


    function renderExtraInfo() {
        return extraInfo != null ? (
            <Box textStyle="sm" color="gray.400">
                <MgText text={extraInfo} size="sm" />
            </Box>
        ) : <></>
    }
}

export default MgCheckbox;