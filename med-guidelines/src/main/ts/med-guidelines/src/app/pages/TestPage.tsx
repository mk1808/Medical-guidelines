import { type JSX } from "react";
import { useState } from 'react'
import reactLogo from './../../assets/react.svg'
import viteLogo from '/vite.svg'
import './../styles.scss'
import {
    Avatar,
    Box,
    Button,
    Card,
    CloseButton,
    Dialog,
    Field,
    For,
    HStack,
    Input,
    Portal,
    Stack,
    Tabs,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu'
import i18n from '../../i18n';
import {
    MgHeading,
    MgText,
    MgDataList,
    MgAccordion,
    MgCard,
    MgTable,
    MgInput,
    MgList,
    MgCheckbox
} from "@/components/ui";
import type { ActionButtonProps } from "@/types/interfaces";
import TableLayout from "@/components/layouts/TableLayout";
import { useRouterNavigate } from "@/hooks";



const TestPage = (): JSX.Element => {
    const [count, setCount] = useState(0)
    const { t } = useTranslation();
    const { navigate } = useRouterNavigate();
    const newText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula urna. Quisque tincidunt nibh quis velit ultricies, et semper arcu eleifend. Sed sed mattis purus. Mauris semper nisl id ligula gravida varius. "


    const dataListItems = [
        { label: "First Name", value: "Jassie" },
        { label: "Last Name", value: "Bhatia" },
        { label: "Email", value: "jassie@jassie.dev" },
        { label: "Phone", value: "1234567890" },
        { label: "Address", value: "1234 Main St, Anytown, USA" },
    ];

    const accordionItems = [
        { label: "First Name", value: "Jassie" },
        { label: "Last Name", value: <MgDataList items={dataListItems} /> },
        { label: "Email", value: "jassie@jassie.dev" },
        { label: "Phone", value: "1234567890" },
        { label: "Address", value: "1234 Main St, Anytown, USA" },
    ];

    const tableColumns: any[] = [
        { name: "Product", key: "name" },
        { name: "Category", key: "category" },
        { name: "Price", key: "price", align: "end" },
        { name: "Info", key: "info", align: "end", render: (item) => <Button onClick={(event) => { console.log("buttonClicked", item); event.stopPropagation(); }}>Info</Button> }
    ];

    const tableItems = [
        { key: "1", name: "Laptop", category: "Electronics", price: 999.99 },
        { key: "2", name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
        { key: "3", name: "Desk Chair", category: "Furniture", price: 150.0 },
        { key: "4", name: "Smartphone", category: "Electronics", price: 799.99 },
        { key: "5", name: "Headphones", category: "Accessories", price: 199.99 },
    ];

    const [inputValue, setInputValue] = useState<string>();

    return (
        <div>
            <MgHeading text={t('welcome')} size='sm' />
            <MgHeading text={t('welcome')} size='md' />
            <MgHeading text={t('welcome')} size='lg' />
            <MgHeading text={t('welcome')} />

            <MgText text={t('welcome')} size='sm' />
            <MgText text={t('welcome')} size='md' />
            <MgText text={t('welcome')} size='lg' />
            <MgText text={t('welcome')} />

            <Box marginY="50px" w="1/2" marginX="auto">
                <MgInput label="Input value" placeholder="Placeholder" value={inputValue} onValueChange={setInputValue} />
                {inputValue}
            </Box>

            <Box marginY="50px">
                <MgDataList items={dataListItems} />
            </Box>

            <Box marginY="50px">
                <MgAccordion items={accordionItems} />
            </Box>

            <Box marginY="50px" >
                <MgList items={["Lorem ipsum dolor sit amet", " consectetur adipisicing elit", " Assumenda, quia temporibus", "eveniet a libero incidunt suscipit"]} />
                <br /><br />
                <MgList items={["Lorem ipsum dolor sit amet", " consectetur adipisicing elit", " Assumenda, quia temporibus", "eveniet a libero incidunt suscipit"]} type="ol" />
            </Box>

            <div>
                translation {t('welcome')}
                translation1 {i18n.t("welcome")}
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <HStack>
                <Button>Click me</Button>
                <Button>Click me</Button>
                <h1>my color</h1>


                <h1>{t('Welcome to React')}</h1>
            </HStack>

            <HStack>
                <For each={["xs", "sm", "md", "lg"]}>
                    {(size) => (
                        <Dialog.Root key={size} size={size} >
                            <Dialog.Trigger asChild>
                                <Button variant="outline" size={size}>
                                    Open ({size})
                                </Button>
                            </Dialog.Trigger>
                            <Portal>
                                <Dialog.Backdrop />
                                <Dialog.Positioner>
                                    <Dialog.Content>
                                        <Dialog.Header>
                                            <Dialog.Title>Dialog Title</Dialog.Title>
                                        </Dialog.Header>
                                        <Dialog.Body>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua.
                                            </p>
                                        </Dialog.Body>
                                        <Dialog.Footer>
                                            <Dialog.ActionTrigger asChild>
                                                <Button variant="outline">Cancel</Button>
                                            </Dialog.ActionTrigger>
                                            <Button>Save</Button>
                                        </Dialog.Footer>
                                        <Dialog.CloseTrigger asChild>
                                            <CloseButton size="sm" />
                                        </Dialog.CloseTrigger>
                                    </Dialog.Content>
                                </Dialog.Positioner>
                            </Portal>
                        </Dialog.Root>
                    )}
                </For>


                <Card.Root width="320px">
                    <Card.Body gap="2">
                        <Avatar.Root size="lg" shape="rounded">
                            <Avatar.Image src="https://picsum.photos/200/300" />
                            <Avatar.Fallback name="Nue Camp" />
                        </Avatar.Root>
                        <Card.Title mt="2">Nue Camp</Card.Title>
                        <Card.Description>
                            This is the card body. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                            Curabitur nec odio vel dui euismod fermentum.
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button variant="outline">View</Button>
                        <Button>Join</Button>
                    </Card.Footer>
                </Card.Root>
            </HStack>
            <Stack gap="4">
                <Input placeholder="Subtle" variant="subtle" />
                <Input placeholder="Outline" variant="outline" />
                <Input placeholder="Flushed" variant="flushed" />
            </Stack>

            <Tabs.Root defaultValue="members">
                <Tabs.List>
                    <Tabs.Trigger value="members">
                        <LuUser />
                        Members
                    </Tabs.Trigger>
                    <Tabs.Trigger value="projects">
                        <LuFolder />
                        Projects
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tasks">
                        <LuSquareCheck />
                        Settings
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="members">Manage your team members</Tabs.Content>
                <Tabs.Content value="projects">Manage your projects</Tabs.Content>
                <Tabs.Content value="tasks">
                    Manage your tasks for freelancers
                </Tabs.Content>
            </Tabs.Root>
            {renderCard()}
            {renderTable()}

            <Button onClick={() => navigate("login")}>take me to login</Button>
            <Button onClick={() => navigate("back")}>take me back</Button>
            <Stack m="6">
                <MgCheckbox text="Some text to check" extraInfo="By clicking this, you agree to our Terms and Privacy Policy."></MgCheckbox>
            </Stack>

        </div>
    )

    function renderCard() {
        const text = t("welcome");
        const externalHeading = "Lorem ipsum dolor sit ament"
        const buttons: ActionButtonProps[] = [
            { onClick: () => console.log("cancel"), title: t("cancel"), variant: "outline" },
            { onClick: () => console.log("save"), title: t("save") },
        ]

        return (
            <MgCard heading={text} infoText={newText} externalHeading={externalHeading} buttons={buttons}>{renderContent()}</MgCard>
        )
    }

    function renderContent() {
        return (
            <Stack gap="4" w="full">
                <Field.Root>
                    <Field.Label>First Name</Field.Label>
                    <Input />
                </Field.Root>
                <Field.Root>
                    <Field.Label>Last Name</Field.Label>
                    <Input />
                </Field.Root>
                <MgHeading text={t('welcome')} size='md' withSeparator />
            </Stack>
        )
    }

    function renderTable() {
        return (
            <TableLayout>
                <Box w="1500px">
                    <MgTable items={tableItems} columns={tableColumns} onClick={(item) => console.log(item)} />
                </Box>
            </TableLayout>
        )
    }
};

export default TestPage;
