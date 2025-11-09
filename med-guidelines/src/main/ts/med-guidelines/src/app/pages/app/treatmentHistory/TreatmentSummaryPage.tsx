import { type JSX } from "react";
interface TreatmentSummaryPageProps {
    placeholder?: string;
}

const TreatmentSummaryPage = ({ placeholder }: TreatmentSummaryPageProps): JSX.Element => (
    <div>
        <h1>TreatmentSummaryPage component</h1>
        {placeholder}
    </div>
);

export default TreatmentSummaryPage;
