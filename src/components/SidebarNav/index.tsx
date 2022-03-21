import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiBarChart2Line, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";


export function SidebarNav(){
  const { pathname } = useLocation()
  return(
   
    <Stack spacing="12" align="flex-start">
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small" >GERAL</Text>
      <Stack spacing="4" mt="8" align="stretch">
        <Link href="/" display="flex" alignItems="center" color={pathname === '/' ? 'purple.400' : 'gray.50'}>
          <Icon as={RiBarChart2Line} />
          <Text ml="4" fontWeight="medium">Dashboard</Text>
        </Link>
        <Link href="/transactions" display="flex" alignItems="center" color={pathname === '/transactions' || pathname === '/transactions/newtransaction' ? 'purple.400' : 'gray.50'}>
          <Icon as={RiDashboardLine} />
          <Text ml="4" fontWeight="medium">Transações</Text>
        </Link>
      </Stack>
    </Box>

    {/* Adicionar novas futures no layout */}
    {/* <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small" >AUTOMAÇÃO</Text>
      <Stack spacing="4" mt="8" align="stretch">
        <Link display="flex" alignItems="center">
          <Icon as={RiInputMethodLine} />
          <Text ml="4" fontWeight="medium">Formulários</Text>
        </Link>
        <Link display="flex" alignItems="center">
          <Icon as={RiGitMergeLine} />
          <Text ml="4" fontWeight="medium">Automação</Text>
        </Link>
      </Stack>
    </Box> */}

  </Stack>

  )
}