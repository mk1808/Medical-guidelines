import { type JSX } from "react";
interface AuthLayoutProps {
    placeholder?: string;
}

const AuthLayout = ({ placeholder }: AuthLayoutProps): JSX.Element => (
    <div>
        <h1>AuthLayout component</h1>
        {placeholder}
    </div>
);

export default AuthLayout;
