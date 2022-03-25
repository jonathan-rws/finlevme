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
    console.log('1',isLoading)
    console.log('1',user)
    return <h1>Loading . . . </h1>
  }
  if (!!user) {
    console.log('2',isLoading)
    console.log('2',user)
  
    return <Navigate to={('/dashboard')} />
  }
  console.log('3',isLoading)
  console.log('3',user)
  return children
}