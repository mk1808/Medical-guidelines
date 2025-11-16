import { MgInput, MgText } from "@/components/ui";
import type { FlowStepParameter } from "@/types/interfaces";
import { Box, Button, Card, Center, Grid, GridItem } from "@chakra-ui/react";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";

interface AddParametersSectionProps {
    placeholder?: string;
}

export const AddParametersSection = ({ placeholder }: AddParametersSectionProps): JSX.Element => {

    const { t } = useTranslation();

    const [params, setParams] = useState<FlowStepParameter[]>([{
        name: "", options: [{
            label: "",
            key: "",
            value: ""
        }, {
            label: "",
            key: "",
            value: ""
        }, {
            label: "",
            key: "",
            value: ""
        }]
    }, {
        name: "", options: [{
            label: "",
            key: "",
            value: ""
        }, {
            label: "",
            key: "",
            value: ""
        }, {
            label: "",
            key: "",
            value: ""
        }]
    }]);
    return (
        <>
            {params.length > 0 ? params.map(renderParameter) : renderNoParamsInfo()}
            {renderAddParamButton()}
        </>
    )

    function renderParameter(parameter: FlowStepParameter) {
        return (
            <Card.Root>
                <Card.Body>
                    <Box>
                        {renderCardContent(parameter)}
                    </Box>
                </Card.Body>
            </Card.Root>
        )
    }

    function renderCardContent(parameter: FlowStepParameter) {
        return (
            <Grid templateColumns="1fr 1fr" gap={4}>
                <GridItem >
                    <MgInput label={t("paramName")} value={parameter.name}></MgInput>
                </GridItem>

                <GridItem textAlign="center">
                    {parameter.options.map(option => renderParamsValueOption())}
                    {renderAddValueButton()}
                </GridItem>
            </Grid>
        )
    }

    function renderNoParamsInfo() {
        return (
            <Center>
                <MgText text={t('noParamsAdded')} size='md' />
            </Center>
        )
    }

    function renderParamsValueOption() {
        return (
            <Box mb={3}>
                <MgInput label={t("paramValue")} />
            </Box>
        )
    }

    function renderAddParamButton() {
        return (
            <Center px="5">
                <Button variant="solid">{t("addParam")}</Button>
            </Center>
        )

    }

    function renderAddValueButton() {
        return <Button variant="solid">{t("addValue")}</Button>
    }
};


