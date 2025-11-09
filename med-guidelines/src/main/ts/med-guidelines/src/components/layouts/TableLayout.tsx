import { type JSX } from "react";
interface TableLayoutProps {
    placeholder?: string;
}

const TableLayout = ({ placeholder }: TableLayoutProps): JSX.Element => (
    <div>
        <h1>TableLayout component</h1>
        {placeholder}
    </div>
);

export default TableLayout;
