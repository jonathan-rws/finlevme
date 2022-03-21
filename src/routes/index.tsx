import { BrowserRouter } from "react-router-dom"
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContexts"
import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"


export function Routes() {


  const isLoggedIn = true
  return (

    <BrowserRouter>
      <SidebarDrawerProvider>
        {isLoggedIn ? (
          <AppRoutes />
        )
          : (
            <AuthRoutes />
          )}
      </SidebarDrawerProvider>
    </BrowserRouter>
  )


}

