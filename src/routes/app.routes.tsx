import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { Dashboard } from "../pages/Dashboard";
import { NewTransaction } from "../pages/NewTransaction";
import { Transactions } from "../pages/Transactions";


export const AppRoutes = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/newtransaction" element={<NewTransaction />} />
        </Routes>
      </Flex>

    </Flex>

  )
}