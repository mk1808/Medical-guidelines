import AuthLayout from "@/components/layouts/AuthLayout";
import { MgCard, MgInput } from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import { Stack } from "@chakra-ui/react";
import { useMemo, useState, type JSX } from "react";
import { useTranslation } from "react-i18next";

interface RegistrationPageProps {
	placeholder?: string;
}

const RegistrationPage = ({ placeholder }: RegistrationPageProps): JSX.Element => {
	const { t } = useTranslation();

	const [login, setLogin] = useState<string>();
	const [password, setPassword] = useState<string>();
	const [confirmPassword, setConfirmPassword] = useState<string>();
	const buttons: ActionButtonProps[] = useMemo(() => [
		{ onClick: () => console.log("register"), title: t("registerAction") },
	], [])

	return (
		<AuthLayout>
			{renderCard()}
		</AuthLayout >
	)

	function renderCard() {
		return <MgCard heading={t("registerHeader")} buttons={buttons} size="lg">{renderContent()}</MgCard>
	}

	function renderContent() {
		return (
			<Stack gap="4" w="full">
				<MgInput label={t("login")} value={login} onValueChange={setLogin} />
				<MgInput label={t("password")} value={password} type="password" onValueChange={setPassword} />
				<MgInput label={t("confirmPassword")} value={confirmPassword} type="password" onValueChange={setConfirmPassword} />
			</Stack>
		)
	}
};

export default RegistrationPage;
