import { type JSX } from "react";
interface NewStepPageProps {
    placeholder?: string;
}

const NewStepPage = ({ placeholder }: NewStepPageProps): JSX.Element => (
    <div>
        <h1>NewStepPage component</h1>
        {placeholder}
    </div>
);

export default NewStepPage;
