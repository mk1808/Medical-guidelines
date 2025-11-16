import AuthLayout from "@/components/layouts/AuthLayout";
import { MgCard, MgInput } from "@/components/ui";
import { useRouterNavigate } from "@/hooks";
import type { ActionButtonProps } from "@/types/interfaces";
import { Box, Button, Card, Center, Field, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useMemo, useState, type JSX } from "react";
import { useTranslation } from "react-i18next";
interface LoginPageProps {
	placeholder?: string;
}

const LoginPage = ({ placeholder }: LoginPageProps): JSX.Element => {
	const { t } = useTranslation();
	const { navigate } = useRouterNavigate();

	const [login, setLogin] = useState<string>();
	const [password, setPassword] = useState<string>();
	const buttons: ActionButtonProps[] = useMemo(() => [
		{ onClick: () => navigate("flowList"), title: t("loginAction") },
	], [])
	return (
		<AuthLayout>
			{renderCard()}
		</AuthLayout >
	)

	function renderCard() {
		return <MgCard heading={t("loggingIn")} buttons={buttons} size="lg">{renderContent()}</MgCard>
	}

	function renderContent() {
		return (
			<Stack gap="4" w="full">
				<MgInput label={t("login")} value={login} onValueChange={setLogin} />
				<MgInput label={t("password")} value={password} type="password" onValueChange={setPassword} />
			</Stack>
		)
	}


};



export default LoginPage;
