import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router";

export const Logo = () => {
    return (
        <NavLink to="/" end>
            <Image
                height="40px"
                rounded="md"
                src="/assets/mg_logo.png"
                alt="Medical Guidelines Logo" />
        </NavLink>
    );
};

export default Logo;

