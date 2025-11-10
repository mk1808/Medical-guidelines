
import './styles.scss'

import { useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router'
import AppRoutes from './router/AppRouter'

function App() {
  const { t } = useTranslation();

  return (
    <>
      <RouterProvider router={AppRoutes} />
    </>
  )
}

export default App
