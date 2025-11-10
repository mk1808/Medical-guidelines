import { Button } from "@chakra-ui/react";
import { type JSX, type ReactNode } from "react";
import { NavLink } from "react-router";

interface MgLinkProps {
    title: string;
    path: string;
}

const MgLink = ({ title, path }: MgLinkProps): JSX.Element => {
    
    return (
        <NavLink to={path} end>
            {({ isActive }) => renderButton(isActive)}
        </NavLink>
    )

    function renderButton(isActive: boolean): ReactNode {
        if(isActive){
            return <Button variant="plain" colorPalette={"accent"} size="lg"> {title} </Button>
        }
        return (
            <Button variant="ghost" colorPalette={"primary"} size="lg"> {title} </Button>
        );
    }
};

export default MgLink;
