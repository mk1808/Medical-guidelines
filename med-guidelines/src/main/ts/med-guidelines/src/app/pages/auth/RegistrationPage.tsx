import AuthLayout from "@/components/layouts/AuthLayout";
import { Box, Button, Card, Center, Field, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { type JSX } from "react";

interface RegistrationPageProps {
    placeholder?: string;
}

const RegistrationPage = ({ placeholder }: RegistrationPageProps): JSX.Element => {
	return (
		<AuthLayout>
			{renderCard()}
		</AuthLayout >
	)

	function renderCard() {
		return (
			<Card.Root maxW="lg" minW="lg">
				<Card.Header>
					<Heading size="lg">Register</Heading>
					<Card.Description>
						Register
					</Card.Description>
				</Card.Header>
				<Card.Body>
					<Stack gap="4" w="full">
						<Field.Root>
							<Field.Label>First Name</Field.Label>
							<Input />
						</Field.Root>
						<Field.Root>
							<Field.Label>Last Name</Field.Label>
							<Input />
						</Field.Root>
					</Stack>
				</Card.Body>
				<Card.Footer justifyContent="flex-end">
					<Button variant="outline">Cancel</Button>
					<Button variant="solid">Sign in</Button>
				</Card.Footer>
			</Card.Root>
		)
	}
};

export default RegistrationPage;
