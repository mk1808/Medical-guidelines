import { IconButton } from "@chakra-ui/react";
import type { JSX, ReactNode } from "react";
import { Tooltip } from "./Tooltip";
import type { callbackFn } from "@/types/types";

interface MgIconButtonProps<T,> {
    children: ReactNode,
    onClick: callbackFn<T>
    tooltip?: string,
}

export const MgIconButton = <T,>({ tooltip, children, onClick }: MgIconButtonProps<T>): JSX.Element => {

    return (
        tooltip != null ?
            <Tooltip content={tooltip}>
                {renderIcon()}
            </Tooltip> :
            renderIcon()
    );

    function renderIcon() {
        return (
            <IconButton variant="surface" onClick={onClick}>
                {children}
            </IconButton>
        )
    }
}

export default MgIconButton;