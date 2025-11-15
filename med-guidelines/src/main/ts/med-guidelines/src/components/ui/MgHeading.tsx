import { Box, Heading, Separator } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";

interface MgHeadingProps {
    text: string;
    size?: "sm" | "md" | "lg";
    firstUppercase?: boolean;
    withSeparator?: boolean
}

export const MgHeading = ({ text, size = "md", firstUppercase = false, withSeparator = false }: MgHeadingProps): JSX.Element => {

    const headingSize = useMemo(getHeadingSize, [size]);

    function getHeadingSize(): "lg" | "2xl" | "4xl" {
        switch (size) {
            case "sm": return "lg";
            case "md": return "2xl";
            case "lg": return "4xl";
            default: return "lg";
        }
    }

    if (withSeparator) {
        return (
            <Box>
                <Separator size="lg" mt="10" mb="3" />
                {renderHeading()}
            </Box>
        )
    }

    return renderHeading();

    function renderHeading() {
        return <Heading size={headingSize} className={firstUppercase ? "first-letter-upperrcase" : ""}>{text}</Heading>
    }
}

export default MgHeading;