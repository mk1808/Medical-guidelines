import { IconButton } from "@chakra-ui/react";
import type { JSX, ReactNode } from "react";
import { Tooltip } from "./Tooltip";

interface MgIconButtonProps {
    tooltip?: string,
    children: ReactNode
}

export const MgIconButton = ({ tooltip, children }: MgIconButtonProps): JSX.Element => {

    return (
        tooltip != null ?
            <Tooltip content={tooltip}>
                {renderIcon()}
            </Tooltip> :
            renderIcon()
    );

    function renderIcon() {
        return (
            <IconButton variant="surface">
                {children}
            </IconButton>
        )
    }
}

export default MgIconButton;