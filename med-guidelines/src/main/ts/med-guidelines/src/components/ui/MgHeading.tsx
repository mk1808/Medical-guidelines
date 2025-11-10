import { Heading } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";

interface MgHeadingProps {
    text: string;
    size?: "sm" | "md" | "lg";
}

export const MgHeading = ({ text, size = "md" }: MgHeadingProps): JSX.Element => {

    const headingSize = useMemo(getHeadingSize, [size]);

    function getHeadingSize(): "lg" | "2xl" | "4xl" {
        switch (size) {
            case "sm": return "lg";
            case "md": return "2xl";
            case "lg": return "4xl";
            default: return "lg";
        }
    }

    return (
        <Heading size={headingSize}>{text}</Heading>
    );
}

export default MgHeading;