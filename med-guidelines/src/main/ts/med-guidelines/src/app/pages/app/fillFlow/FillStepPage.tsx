import { type JSX } from "react";
interface FillStepPageProps {
    placeholder?: string;
}

const FillStepPage = ({ placeholder }: FillStepPageProps): JSX.Element => (
    <div>
        <h1>FillStepPage component</h1>
        {placeholder}
    </div>
);

export default FillStepPage;
