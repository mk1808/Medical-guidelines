import { type JSX } from "react";
interface NewFlowPageProps {
    placeholder?: string;
}

const NewFlowPage = ({ placeholder }: NewFlowPageProps): JSX.Element => (
    <div>
        <h1>NewFlowPage component</h1>
        {placeholder}
    </div>
);

export default NewFlowPage;
