import { Text } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";

interface MgTextProps {
    text: string;
    size?: "sm" | "md" | "lg";
}

export const MgText = ({ text, size = "md" }: MgTextProps): JSX.Element => {

    const textSize = useMemo(getTextSize, [size]);

    function getTextSize(): "sm" | "lg" | "2xl" {
        switch (size) {
            case "sm": return "sm";
            case "md": return "lg";
            case "lg": return "2xl";
            default: return "lg";
        }
    }

    return (
        <Text textStyle={textSize}>{text}</Text>
    );
}

export default MgText;