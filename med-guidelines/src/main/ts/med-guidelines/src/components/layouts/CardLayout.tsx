import { type JSX } from "react";
interface CardLayoutProps {
    placeholder?: string;
}

const CardLayout = ({ placeholder }: CardLayoutProps): JSX.Element => (
    <div>
        <h1>CardLayout component</h1>
        {placeholder}
    </div>
);

export default CardLayout;
