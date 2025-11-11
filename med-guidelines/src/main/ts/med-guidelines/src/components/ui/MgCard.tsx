import { Button, Card, Center, Grid, GridItem, Separator, Stack } from "@chakra-ui/react";
import { type JSX, type ReactNode } from "react";
import MgHeading from "./MgHeading";
import MgText from "./MgText";
import { useTranslation } from "react-i18next";
import type { voidFn } from "@/types/types";


interface MgCardProps {
    children: ReactNode,
    heading: string | string[] | ReactNode;
    size?: "sm" | "md" | "lg" | "6xl";
    infoText?: string,
    prevBtnTitle?: string,
    nextBtnTitle?: string,
    onCancelClick?: voidFn,
    onSaveClick?: voidFn,
}

const MgCard = ({ children, heading, size = "6xl", infoText, prevBtnTitle = "cancel", nextBtnTitle = "save", onCancelClick, onSaveClick }: MgCardProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Center my="12">{renderCard()}</Center>
    )

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
                    {renderButtons()}
                </Card.Footer>
            </Card.Root>
        )
    }

    function renderHeading() {
        if ((typeof heading === "string")) {
            return <MgHeading size="md" text={heading}></MgHeading>
        }
        if (((Array.isArray(heading)))) {
            return renderHeadingWithGrid(heading);
        }
        return heading;
    }

    function renderHeadingWithGrid(array: string[]) {
        return (
            <Grid templateColumns="2fr 0.2fr repeat(6, 1fr)" >
                <GridItem colSpan={1}>
                    <MgHeading size="md" text={array[0]}></MgHeading>
                </GridItem>
                <Separator orientation="vertical" />
                <GridItem colSpan={4}>
                    <MgHeading size="md" text={array[1]}></MgHeading>
                </GridItem>
            </Grid>
        )
    }

    function renderInfoText() {
        return infoText != null && (
            <Stack mb="4">
                <MgText text={infoText}></MgText>
            </Stack>
        )
    }

    function renderContent() {
        return children;
    }

    function renderButtons() {
        return (
            <>
                <Button variant="outline" onClick={onCancelClick}>{t(prevBtnTitle)}</Button>
                <Button variant="solid" onClick={onSaveClick}>{t(nextBtnTitle)}</Button>
            </>
        )
    }
}

export default MgCard;