import './App.scss'

// Pages
import MainPage from './pages/Main Page/MainPage'

// general
import { AppProvider } from './context/AppContext'

const App = () => {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  )
}
export default App
