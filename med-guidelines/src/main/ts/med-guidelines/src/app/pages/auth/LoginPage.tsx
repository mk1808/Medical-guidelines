import AuthLayout from "@/components/layouts/AuthLayout";
import { Box } from "@chakra-ui/react";
import { type JSX } from "react";
interface LoginPageProps {
	placeholder?: string;
}

const LoginPage = ({ placeholder }: LoginPageProps): JSX.Element => (
	<AuthLayout>
		<Box>
			<h1>LoginPage component</h1>
			{placeholder}
		</Box>
	</AuthLayout>

);

export default LoginPage;
