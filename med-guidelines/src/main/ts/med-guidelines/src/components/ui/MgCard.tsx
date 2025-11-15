import { Box, Card, Center, Grid, GridItem, Separator, Stack } from "@chakra-ui/react";
import { type JSX, type ReactNode } from "react";
import MgHeading from "./MgHeading";
import MgText from "./MgText";
import MgActionButtons from "./MgActionButtons";
import type { ActionButtonProps } from "@/types/interfaces";


interface MgCardProps {
    children: ReactNode,
    heading: string | string[] | ReactNode;
    externalHeading?: string,
    size?: "sm" | "md" | "lg" | "6xl";
    infoText?: string,
    buttons: ActionButtonProps[],
    externalHeadingAdditionalInfo?: ReactNode,
}

export const MgCard = ({
    children,
    heading,
    externalHeading,
    size = "6xl",
    infoText,
    buttons,
    externalHeadingAdditionalInfo
}: MgCardProps): JSX.Element => {

    return (
        <Center my="12">
            <Stack>
                {renderExternalHeading()}
                {renderCard()}
            </Stack>
        </Center>
    )

    function renderExternalHeading() {
        return externalHeading != null && (
            <Stack width={size} mb={1} direction="row" align="center">
                <MgHeading text={externalHeading} firstUppercase />
                {renderExternalHeadingAdditionalInfo()}
            </Stack>
        )
    }

    function renderExternalHeadingAdditionalInfo() {
        if (externalHeadingAdditionalInfo) {
            return (
                <Box marginLeft="auto">
                    {externalHeadingAdditionalInfo}
                </Box>
            )
        }

        return <></>
    }

    function renderCard() {
        return (
            <Card.Root maxW={size} minW={size}>
                <Card.Header>
                    {renderHeading()}
                    <Separator />
                </Card.Header>
                <Card.Body px="14">
                    {renderInfoText()}
                    {renderContent()}
                </Card.Body>
                <Card.Footer justifyContent="space-between" mt="4">
                    <MgActionButtons buttons={buttons} />
                </Card.Footer>
            </Card.Root>
        )
    }

    function renderHeading() {
        if (typeof heading === "string") {
            return <MgHeading size="md" text={heading} firstUppercase />
        }
        if (Array.isArray(heading)) {
            return renderHeadingWithGrid(heading);
        }
        return heading;
    }

    function renderHeadingWithGrid(array: string[]) {
        return (
            <Grid templateColumns="2fr 0.2fr repeat(6, 1fr)" >
                <GridItem colSpan={1}>
                    <MgHeading size="md" text={array[0]} />
                </GridItem>
                <Separator orientation="vertical" />
                <GridItem colSpan={4}>
                    <MgHeading size="md" text={array[1]} />
                </GridItem>
            </Grid>
        )
    }

    function renderInfoText() {
        return infoText != null && (
            <Stack mb="4">
                <MgText text={infoText} />
            </Stack>
        )
    }

    function renderContent() {
        return children;
    }
}
