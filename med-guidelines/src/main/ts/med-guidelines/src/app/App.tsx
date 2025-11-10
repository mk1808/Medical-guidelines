
import './styles.scss'

import { useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router'
import AppRoutes from './router/AppRouter'
import Footer from '@/components/ui/Footer'
import NavBar from '@/components/ui/navBar/NavBar'

function App() {
  const { t } = useTranslation();

  return (
    <>
      <RouterProvider router={AppRoutes} />
 
    </>
  )
}

export default App
