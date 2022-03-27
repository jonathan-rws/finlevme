import { Box, Button, Divider, Flex, FormControl, FormLabel, Heading, Input, Select, SimpleGrid, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContex";
import { useTransactions } from "../../hooks/transactions";
import {useNavigate} from 'react-router-dom'

interface FormData{
  title: string
  category: string
  value: number
  type: string
}


export function NewTransaction() {
  const navigate = useNavigate()
  const {user} = useAuth()
  const transactions = useTransactions()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()
  
  
  
  async function handleCreateNewTransaction(data:FormData){

    if(user){
     
      await transactions.create(data.title, data.category, data.value, data.type, user.uid)
      navigate('/transactions')
    }
  }

  return (
    <Box flex="1" borderRadius="8" bg="gray.800" p="8">
      <Heading size="lg" fontWeight="normal">Nova Transação</Heading>
      <Divider my='6' borderColor="gray.700"></Divider>
      <FormControl>
        <VStack spacing="8" as= 'form'  onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <SimpleGrid minChildWidth="340px" spacing="8" w="100%">
            <Box>
              <FormLabel htmlFor="title">Titulo</FormLabel>
              <Input
              {...register('title')}
              size="lg"
                _hover={{
                  bg: "gray.900"
                }}
                variant={"filled"}
                bg={"gray.900"}
                focusBorderColor="purple.500"
                name="title"
                type="text" />
            </Box>
            <Box>
              <FormLabel htmlFor="value">Valor</FormLabel>
              <Input
               {...register('value')}
              size="lg"
                _hover={{
                  bg: "gray.900"
                }}
                variant={"filled"}
                bg={"gray.900"}
                focusBorderColor="purple.500"
                name="value"
                type="number" />
            </Box>
          </SimpleGrid>
          <SimpleGrid minChildWidth="340px" spacing="8" w="100%">
            <Box>
              <FormLabel htmlFor="category">Categoria</FormLabel>
              <Input
               {...register('category')}
              size="lg"
                _hover={{
                  bg: "gray.900"
                }}
                variant={"filled"}
                bg={"gray.900"}
                focusBorderColor="purple.500"
                name="category"
                type="text" />
            </Box>
            <Box>
              <FormLabel htmlFor="Tipo">Tipo</FormLabel>
              <Select 
               {...register('type')}
                size="lg"
                _hover={{
                  bg: "gray.900"
                }}
                variant={"filled"}
                bg={"gray.900"}
                focusBorderColor="purple.500"  
                name="type"
                placeholder='Selecione o tipo da transação'>
                <option value='option1'>Entrada</option>
                <option value='option2'>Saída</option>
  
              </Select>
            </Box>
          </SimpleGrid>
          <Flex w="100%" justifyContent="space-between" >
            <Button as='a' href='/transactions' mt="8" size="lg" colorScheme={"gray"}>Voltar</Button>
            <Button isLoading={isSubmitting} mt="8" size="lg" type="submit" colorScheme={"purple"}>Cadastrar</Button>
          </Flex>
        </VStack>
      </FormControl>

    </Box>
  )
}