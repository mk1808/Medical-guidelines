import { type JSX } from "react";
interface FlowSummaryPageProps {
    placeholder?: string;
}

const FlowSummaryPage = ({ placeholder }: FlowSummaryPageProps): JSX.Element => (
    <div>
        <h1>FlowSummaryPage component</h1>
        {placeholder}
    </div>
);

export default FlowSummaryPage;
