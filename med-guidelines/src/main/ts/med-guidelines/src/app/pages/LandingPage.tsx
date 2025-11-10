import NavBar from "@/components/ui/navBar/NavBar";
import { type JSX } from "react";

interface LandingPageProps {
	placeholder?: string;
}

const LandingPage = ({ placeholder }: LandingPageProps): JSX.Element => (
	<div>
		<NavBar />
		<h1>LandingPage component</h1>
		{placeholder}
	</div>
);

export default LandingPage;
