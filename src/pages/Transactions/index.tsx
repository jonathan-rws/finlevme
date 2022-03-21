import { Box, Button, Checkbox, Divider, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Pagination } from "../../components/Pagination";

export function Transactions() {
  return (
    <Box flex="1" borderRadius="8" bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">Transações</Heading>
        
        <Button
          colorScheme="purple"
          as="a"
          href="/transactions/newtransaction"
          leftIcon={<Icon as={RiAddLine}/>}
        >
          Nova Transação
        </Button>
      </Flex>
      <Divider my='6' borderColor="gray.700"></Divider>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th px="6" color="gray.300" width="8">
              <Checkbox colorScheme="purple"/>
            </Th>
            <Th>Transaction</Th>
            <Th>Data</Th>
            <Th w="8">Valor</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Saque</Td>
            <Td>26/05/2021</Td>
            <Td color="green.500">R$2700,00</Td>
          </Tr>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Compras</Td>
            <Td>22/05/2021</Td>
            <Td color="red.500">R$2700,00</Td>
          </Tr>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Compra de Sementes</Td>
            <Td>22/05/2021</Td>
            <Td color="red.500">R$750,00</Td>
          </Tr>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Saque</Td>
            <Td>22/05/2021</Td>
            <Td color="green.500">R$1230,00</Td>
          </Tr>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Compra de Folhas</Td>
            <Td>22/05/2021</Td>
            <Td color="red.500">R$300,00</Td>
          </Tr>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Pagamento Kapazi</Td>
            <Td>22/05/2021</Td>
            <Td color="red.500">R$1230,00</Td>
          </Tr>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Saque</Td>
            <Td>22/05/2021</Td>
            <Td color="green.500">R$1690,00</Td>
          </Tr>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Saque</Td>
            <Td>22/05/2021</Td>
            <Td color="green.500">R$810,00</Td>
          </Tr>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Compra de Tinta</Td>
            <Td>22/05/2021</Td>
            <Td color="red.500">R$1230,00</Td>
          </Tr>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="purple"/>
            </Td>
            <Td>Compra de Fita</Td>
            <Td>22/05/2021</Td>
            <Td color="green.500">R$60,00</Td>
          </Tr>
        </Tbody>
      </Table>
      <Pagination/>
    </Box>
  )
}