import { t } from "i18next";

export function formCardExternalHeading({ flowName, disease, version }: { flowName: string, disease: string, version: string }) {
    return `${t("flow")} ${flowName} ${t("forDisease")} ${disease}, ${t("version")}: ${version}`;
}