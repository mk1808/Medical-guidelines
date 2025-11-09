import { type JSX } from "react";
interface FlowHistoryPageProps {
    placeholder?: string;
}

const FlowHistoryPage = ({ placeholder }: FlowHistoryPageProps): JSX.Element => (
    <div>
        <h1>FlowHistoryPage component</h1>
        {placeholder}
    </div>
);

export default FlowHistoryPage;
