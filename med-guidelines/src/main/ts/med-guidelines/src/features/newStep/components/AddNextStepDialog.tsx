
import { MgInput, MgSelect } from "@/components/ui";
import MgDialog from "@/components/ui/MgDialog";
import type { SelectValueProps } from "@/types/interfaces";
import type { callbackFn } from "@/types/types";
import { Button, Flex, useDialog } from "@chakra-ui/react";
import { useEffect, useMemo, useState, type JSX, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface AddNextStepDialogProps {
    children?: ReactNode,
    isOpen?: boolean,
    dialogOpenChange?: callbackFn<boolean>
}

export const AddNextStepDialog = ({ isOpen = false, dialogOpenChange }: AddNextStepDialogProps): JSX.Element => {

    const { t } = useTranslation();
    const dialog = useDialog();

    const [bodyType, setBodyType] = useState<string>('addNextStep');
    const [isRenderSave, setIsRenderSave] = useState<boolean>(false);
    const [stepName, setStepName] = useState<string>();
    const [conditions, setConditions] = useState<{ parameter?: string, value?: string }[]>([{}]);

    const steps: SelectValueProps<string>[] = useMemo(() => [
        { label: "Step 1", key: "step1", value: "Step 1" },
        { label: "Step 2", key: "step2", value: "Step 2" },
        { label: "Step 3", key: "step3", value: "Step 3" },
        { label: "Step 4", key: "step4", value: "Step 4" },
    ], [])

    const parameters: SelectValueProps<string>[] = useMemo(() => [
        { label: "Parameter 1", key: "parameter1", value: "Parameter 1" },
        { label: "Parameter 2", key: "parameter2", value: "Parameter 2" },
        { label: "Parameter 3", key: "parameter3", value: "Parameter 3" },
        { label: "Parameter 4", key: "parameter4", value: "Parameter 4" },
    ], [])

    const parameterValues: SelectValueProps<string>[] = useMemo(() => [
        { label: "Value 1", key: "value1", value: "Value 1" },
        { label: "Value 2", key: "value2", value: "Value 2" },
        { label: "Value 3", key: "value3", value: "Value 3" },
        { label: "Value 4", key: "value4", value: "Value 4" },
    ], [])

    useEffect(() => {
        dialogOpenChange?.(dialog.open);
    }, [dialog.open]);

    useEffect(() => {
        if (isOpen) {
            resetView();
        }

        dialog.setOpen(isOpen);
    }, [isOpen])

    function resetView() {
        setBodyType('addNextStep');
        setStepName("");
        setConditions([{}]);
        setIsRenderSave(false);
    }

    function onAddNextNewStepClick() {
        setBodyType('addNextNewStep');
    }

    function onExistingStepClick() {
        setBodyType('addNextExistingStep');
    }

    function onNewStepSaveClick() {
        setBodyType('addNextStepConditions');
        setIsRenderSave(true);
    }

    function onSelectExistingSaveClick() {
        setBodyType('addNextStepConditions');
        setIsRenderSave(true);
    }

    function onParameterSelect(parameter: string, index: number) {
        const conditionCopy = [...conditions]
        conditionCopy[index].parameter = parameter;
        setConditions(conditionCopy)
    }

    function onParameterValueSelect(value: string, index: number) {
        const conditionCopy = [...conditions]
        conditionCopy[index].value = value;
        setConditions(conditionCopy)
    }

    function onNewParameter() {
        setConditions(conditions => [...conditions, {}]);
    }

    function save() {
        console.log('saved');
        dialog.setOpen(false);
    }

    return (
        <MgDialog
            dialog={dialog}
            title={t(bodyType)}
            body={renderBody}
            saveButton={renderSaveButton}
            triggerButton={renderTriggerButton}
        />
    )

    function renderBody() {
        switch (bodyType) {
            case 'addNextStep': return renderSelectTypeBody();
            case 'addNextNewStep': return renderCreateNewStepBody();
            case 'addNextExistingStep': return renderSelectExistingStepBody();
            case 'addNextStepConditions': return renderAddConditionsBody();
        }
    }

    function renderSelectTypeBody() {
        return (
            <Flex direction="row" justify="center" gap="4">
                <Button onClick={onAddNextNewStepClick} width="1/3">{t("addNextNewStepButton")}</Button>
                <Button onClick={onExistingStepClick} width="1/3">{t("addNextExistingStepButton")}</Button>
            </Flex>
        )
    }

    function renderCreateNewStepBody() {
        return (
            <Flex direction="column" align="center" gap="4">
                <MgInput label={t("stepName")} value={stepName} onValueChange={setStepName} />
                <Button onClick={onNewStepSaveClick} width="1/3">{t("save")}</Button>
            </Flex>
        )
    }

    function renderSelectExistingStepBody() {
        return (
            <Flex direction="column" align="center" gap="4">
                <MgSelect
                    options={steps}
                    label={t("selectExistingStep")}
                    onSelect={setStepName}
                    value={stepName}
                    zIndex={1500}
                />
                <Button onClick={onSelectExistingSaveClick} width="1/3">{t("save")}</Button>
            </Flex>
        )
    }

    function renderAddConditionsBody() {
        return (
            <Flex direction="column" align="center" gap="4">
                {conditions.map(renderSelectParameterCondition)}
                <Button onClick={onNewParameter} width="1/3">{t("addNextParameter")}</Button>
            </Flex>
        )
    }

    function renderSelectParameterCondition(condition: { parameter?: string, value?: string }, index: number) {
        return (
            <Flex direction="row" justify="center" gap="8" key={index} w="full">
                <MgSelect
                    options={parameters}
                    label={t("parameter")}
                    value={condition.parameter}
                    onSelect={(value) => onParameterSelect(value, index)}
                    zIndex={1500}
                />
                <MgSelect
                    options={parameterValues}
                    label={t("parameterValue")}
                    value={condition.value}
                    onSelect={(value) => onParameterValueSelect(value, index)}
                    zIndex={1500}
                />
            </Flex>
        )
    }

    function renderSaveButton() {
        return isRenderSave && <Button onClick={save}>{t("save")}</Button>

    }

    function renderTriggerButton() {
        return null;
    }
}