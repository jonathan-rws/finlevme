import { AppRoutes } from "./routes"
import { BrowserRouter } from "react-router-dom"
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContexts"
import { AuthProvider } from "./contexts/AuthContex"


function App() {


  return (

    <BrowserRouter>
      <AuthProvider>
        <SidebarDrawerProvider>
          <AppRoutes />
        </SidebarDrawerProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
