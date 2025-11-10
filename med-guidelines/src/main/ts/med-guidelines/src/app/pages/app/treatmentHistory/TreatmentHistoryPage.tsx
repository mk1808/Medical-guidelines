import { type JSX } from "react";
interface TreatmentHistoryPageProps {
    placeholder?: string;
}

const TreatmentHistoryPage = ({ placeholder }: TreatmentHistoryPageProps): JSX.Element => (
    <div>
        <h1>TreatmentHistoryPage component</h1>
        {placeholder}
    </div>
);

export default TreatmentHistoryPage;
