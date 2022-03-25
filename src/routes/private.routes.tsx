import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { useAuth } from "../contexts/AuthContex"


interface PrivateRoutesProps {
  children: JSX.Element
}

export function PrivateRoutes({ children }: PrivateRoutesProps) {

  const { user, isLoading } = useAuth()

  if (isLoading) {

    return <h1>Loading . . . </h1>

  }
  if (!user) {
    return (<Navigate to={('/')} />)
  }

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        {children}
      </Flex>

    </Flex>



  )
}