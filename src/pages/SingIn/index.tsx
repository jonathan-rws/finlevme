import { Button, Flex, FormControl, FormLabel, Input, Link, Stack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContex";


interface FormData {
  email: string
  password: string
}


export function SingIn() {
  const { register, handleSubmit,  formState: { errors, isSubmitting } } = useForm<FormData>()
  const {singIn} = useAuth()



  async function handleSingIn({email, password}: FormData) {
   try {
     await singIn(email, password)
     
   } catch (error) {
     console.log(error)
   }
  }

  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      align={"center"}
      justify={"center"}
    >
      <Flex
        onSubmit={handleSubmit(handleSingIn)}
        flexDirection={"column"}
        as="form"
        width={"100%"}
        borderRadius={5}
        maxW={360}
        bg=
        {"gray.800"}
        p="8">
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              {...register('email')}
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
              variant={"filled"}
              bg={"gray.900"}
              focusBorderColor="purple.500"
              name="email"
              type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
             id="passowrd"
              {...register('password')}
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
              variant={"filled"}
              bg={"gray.900"}
              focusBorderColor="purple.500"

              type="password" />
          </FormControl>
          <Button isLoading={isSubmitting} size="lg" type="submit" colorScheme={"purple"}>Entrar</Button>
          <Link  href="/singup">Criar conta</Link>
        </Stack>
      </Flex>
    </Flex>
  )
}