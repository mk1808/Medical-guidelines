import { type JSX } from "react";
interface ProposedTreatmentPageProps {
    placeholder?: string;
}

const ProposedTreatmentPage = ({ placeholder }: ProposedTreatmentPageProps): JSX.Element => (
    <div>
        <h1>ProposedTreatmentPage component</h1>
        {placeholder}
    </div>
);

export default ProposedTreatmentPage;
