import { Box, Button, Checkbox, Divider, Flex, Heading, Icon, Spinner, Stack, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiAddLine, RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContex";
import { useTransactions } from "../../hooks/transactions";
import { Transaction } from "../../types/types";

export function Transactions() {

  const { get } = useTransactions()
  const { user } = useAuth()

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })
  const monthsdata = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [currentMonth, setCurrentMonth] = useState(2)
  const [currentYear, setCurrentYear] = useState(2022)
  const [isLoading, setIsLoading] = useState(true)

  function handleChangeCurrentDate(type: string) {
   
    if(type === 'increment'){
      if(currentMonth === 11){
        setCurrentMonth(0)
        setCurrentYear(currentYear + 1)
      }else{
        setCurrentMonth(currentMonth + 1)
      }
    }
    if(type === 'decrement'){
      
      if(currentMonth === 0 ){
        setCurrentMonth(11)
        setCurrentYear(currentYear-1)
       
      }else{

        setCurrentMonth(currentMonth -1)
      }

    }
  }



  useEffect(() => {
    setIsLoading(true)
    async function getTransactions() {
      if (user) {

        const data = await get(user.uid, currentYear, currentMonth)
        setTransactions(data)
        setIsLoading(false)
      }
    }
    getTransactions()

  }, [currentMonth])

  return (
    <Box flex="1" borderRadius="8" bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">Transações {isLoading && <Spinner ml='4' h='4' w='4' />}</Heading>

        <Button
          colorScheme="purple"
          as="a"
          href="/transactions/newtransaction"

        >
          <Icon as={RiAddLine} />  {isWideVersion && 'Nova Transação'}
        </Button>
      </Flex>
      <Divider my='6' borderColor="gray.700"></Divider>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th px="6" color="gray.300" width="8">
              <Checkbox colorScheme="purple" />
            </Th>
            <Th>Transaction</Th>
            {isWideVersion && <Th>Data</Th>}
            <Th w="8">Valor</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            transactions.map(transaction => {
              return (
                <Tr key={transaction.id}>
                  <Td px="6">
                    <Checkbox colorScheme="purple" />
                  </Td>
                  <Td>{transaction.title}</Td>
                  {isWideVersion && <Td>{new Date(transaction.createdAt).toLocaleDateString('pt-br', {
                    year:'numeric',
                    day:'2-digit',
                    month:'long'

                  })}</Td>}
                  <Td color="green.500">R${transaction.value}</Td>
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>
      <Stack justify="space-between" alignItems="center" direction="row" mt="8">
        <Button
          onClick={() => handleChangeCurrentDate('decrement')}
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="purple"
        >
          <Icon fontSize='30' as={RiArrowDropLeftLine} />
        </Button>

        <Box fontSize='sm' color='gray.600'><strong>{monthsdata[currentMonth]}</strong> de <strong>{currentYear}</strong></Box>
        <Stack direction="row" spacing="2">
          <Button

            onClick={() => handleChangeCurrentDate('increment')}
            size="sm"
            fontSize="xs"
            w="4"
            colorScheme="purple"
          >
            <Icon fontSize='30' as={RiArrowDropRightLine} />
          </Button>

        </Stack>

      </Stack>
    </Box>
  )
}