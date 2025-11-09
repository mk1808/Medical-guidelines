import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.scss'
import {
  Avatar, Button,
  Card,
  CloseButton,
  Dialog,
  For,
  HStack,
  Input,
  Portal,
  Stack,
  Tabs,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu'
import i18n from '../i18n';
import { RouterProvider } from 'react-router'
import AppRoutes from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <>
      <RouterProvider router={AppRoutes} />,
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
    </>
  )
}

export default App
