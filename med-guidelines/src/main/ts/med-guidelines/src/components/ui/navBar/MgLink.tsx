import { Button, Link } from "@chakra-ui/react";
import { type JSX, type ReactNode } from "react";
import { NavLink } from "react-router";

interface MgLinkProps {
    title: string;
    path: string;
    isButton?: boolean,
    isExternal?: boolean
}

const MgLink = ({ title, path, isButton = true, isExternal = false }: MgLinkProps): JSX.Element => {

    return isButton ? renderForButton() : renderForLink();

    function renderForButton() {
        return (<NavLink to={path} end>
            {({ isActive }) => renderButton(isActive)}
        </NavLink>)
    }

    function renderForLink() {
        return (
            <Link color="white" variant="underline" href={path} target={isExternal ? "_blank" : ""} mb="2">
                {title}
            </Link>
        )
    }

    function renderButton(isActive: boolean): ReactNode {
        if (isActive) {
            return <Button variant="plain" colorPalette={"accent"} size="lg"> {title} </Button>
        }
        return (
            <Button variant="ghost" colorPalette={"primary"} size="lg"> {title} </Button>
        );
    }
};

export default MgLink;
