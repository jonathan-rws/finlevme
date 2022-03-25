import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { useAuth } from "../contexts/AuthContex"


interface PrivateRoutesProps {
  children: JSX.Element
}

export function AuthRoutes({ children }: PrivateRoutesProps) {

  const { user, isLoading } = useAuth()
 
  if (isLoading) {

    return <h1>Loading . . . </h1>

  }
  if (!user) {
  
    return children
  }
  return (<Navigate to={('/dashboard')} />)
  
}