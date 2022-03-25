import { Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./private.routes"
import { AuthRoutes } from "./auth.routes "

import { Dashboard } from "../pages/Dashboard"
import { NewTransaction } from "../pages/NewTransaction"
import { SingIn } from "../pages/SingIn"
import { SingUp } from "../pages/SingUp"
import { Transactions } from "../pages/Transactions"



export function AppRoutes() {


  
  return (
    <Routes>
      <Route path="/dashboard" element={<PrivateRoutes><Dashboard/></PrivateRoutes>}/>
      <Route path="/transactions" element={<PrivateRoutes><Transactions/></PrivateRoutes>}/>
      <Route path="/transactions/newtransaction" element={<PrivateRoutes><NewTransaction/></PrivateRoutes>}/>
      <Route path="/" element={<AuthRoutes><SingIn/></AuthRoutes>}/>
      <Route path="/singup" element={<SingUp/>}/>
    </Routes>
    
  )


}

