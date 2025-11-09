import { type JSX } from "react";
interface StepSummaryPageProps {
    placeholder?: string;
}

const StepSummaryPage = ({ placeholder }: StepSummaryPageProps): JSX.Element => (
    <div>
        <h1>StepSummaryPage component</h1>
        {placeholder}
    </div>
);

export default StepSummaryPage;
