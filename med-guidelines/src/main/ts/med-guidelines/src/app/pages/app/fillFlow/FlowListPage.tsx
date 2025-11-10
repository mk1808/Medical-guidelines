import NavBar from "@/components/ui/navBar/NavBar";
import { type JSX } from "react";
interface FlowListPageProps {
    placeholder?: string;
}

const FlowListPage = ({ placeholder }: FlowListPageProps): JSX.Element => (
    <div>
        <NavBar />
        <h1>FlowListPage component</h1>
        {placeholder}
    </div>
);

export default FlowListPage;
