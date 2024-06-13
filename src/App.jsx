import './App.scss'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Pages
import MainPage from './pages/Main Page/MainPage'

// general
import { AppProvider } from './context/AppContext'
import axios from 'axios'
import Layout from './Layout/Layout'
import NotFound from './pages/Not Found/NotFound'
import ErrorPage from './pages/Error Page/ErrorPage'

// Dynamic imports
const VehicleDetailsPage = lazy(() =>
  import('./pages/Vehicle Details Page/VehicleDetailsPage')
)
const ListingPage = lazy(() => import('./pages/Listing Page/ListingPage'))
const SignUp = lazy(() => import('./pages/Signup Page/SignUp'))
const ResetPassword = lazy(() => import('./pages/Reset Password/ResetPassword'))

// carousel import for main page

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const queryClient = new QueryClient()

// Listing Page
// https://www.oneclickdrive.com/rent-a-car-dubai?order=featured&emirate=Dubai&group%5B%5D=4&change_status=1&filter=1

// Details Page
// https://www.oneclickdrive.com/details/index/search-car-rentals-dubai/Lamborghini/Urus-Pearl-Capsule/?id=29020

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/details/:id',
        element: <VehicleDetailsPage />,
      },
      {
        path: '/listing',
        element: <ListingPage />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/reset-password',
        element: <ResetPassword />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </QueryClientProvider>
  )
}
export default App
