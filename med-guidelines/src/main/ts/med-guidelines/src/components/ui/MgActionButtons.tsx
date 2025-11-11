import type { ActionButtonProps } from "@/types/interfaces";
import { Button } from "@chakra-ui/react";
import { useMemo, type JSX } from "react";

interface MgActionButtonsProps {
    buttons: ActionButtonProps[]
}

export const MgActionButtons = ({ buttons }: MgActionButtonsProps): JSX.Element => {

    const getMarginIfOnlyOneButton = () => buttons.length === 1 ? { marginLeft: 'auto' } : {};

    const onlyOneButtonMargin = useMemo(getMarginIfOnlyOneButton, [buttons])

    return (
        <>
            {buttons.map(renderButton)}
        </>
    );

    function renderButton(button: ActionButtonProps) {
        return (
            <Button
                {...onlyOneButtonMargin}
                key={button.title}
                variant={button.variant}
                onClick={button.onClick}
                colorPalette={button.colorPalette}>
                {button.title}
            </Button>
        )
    }
}

export default MgActionButtons;