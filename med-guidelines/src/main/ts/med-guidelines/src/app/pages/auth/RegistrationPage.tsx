import { type JSX } from "react";

interface RegistrationPageProps {
    placeholder?: string;
}

const RegistrationPage = ({ placeholder }: RegistrationPageProps): JSX.Element => (
    <div>
        <h1>RegistrationPage component</h1>
        {placeholder}
    </div>
);

export default RegistrationPage;
