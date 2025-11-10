import { Box, Button, Card, Center, Field, Flex, Heading, Input, Separator, Stack } from "@chakra-ui/react";
import { useMemo, type JSX, type ReactNode } from "react";
import MgLink from "./navBar/MgLink";
import { useTranslation } from "react-i18next";
import MgHeading from "./MgHeading";
import MgText from "./MgText";

interface MgCardProps {
    text: string;
    size?: "sm" | "md" | "lg";
}

const MgCard = ({ text, size = "md" }: MgCardProps): JSX.Element => {
    const { t } = useTranslation();
    const newText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius. "
    return (
        <Center my="12"> {renderCard()}</Center>
    )


    function renderCard() {
        return (
            <Card.Root maxW="6xl" minW="6xl">
                <Card.Header>
                    <MgHeading size="md" text={t('welcome')}></MgHeading>
                    <Separator />

                </Card.Header>
                <Card.Body px="14">
                    <Stack mb="4">
                        <MgText text={newText}></MgText>
                    </Stack>
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
                <Card.Footer justifyContent="space-between" mt="4">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="solid">Sign in</Button>
                </Card.Footer>
            </Card.Root>
        )
    }

    function renderFooterContent() {
        return (
            <></>
        )
    }

    function renderFooterBox(children: ReactNode) {
        return (
            <></>
        )
    }
}

export default MgCard;