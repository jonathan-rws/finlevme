import { Button, Flex, FormControl, FormLabel, Input, Link, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContex";

interface FormData {
  name: string
  email: string
  password: string
  passwordConfirm: string
}


export function SingUp() {
  const { singUp } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  async function handleSingUp({ name, email, password }: FormData) {
    try {
      await singUp(name, email, password)

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
        onSubmit={handleSubmit(handleSingUp)}
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
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              {...register('name')}
              size="lg"
              variant={"filled"}
              bg={"gray.900"}
              focusBorderColor="purple.500"
              name="name"
              type="name"
              _hover={{
                bg: "gray.900"
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              {...register('email')}
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
              variant={"filled"}
              bg={"gray.900"}
              focusBorderColor="purple.500"
              name="email"
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              {...register('password')}
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
              variant={"filled"}
              bg={"gray.900"}
              focusBorderColor="purple.500"
              name="password"
              type="password"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password-confirme">Confirmar Senha</FormLabel>
            <Input
              {...register('passwordConfirm')}
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
              variant={"filled"}
              bg={"gray.900"}
              focusBorderColor="purple.500"
              name="passwordConfirm"
              type="password"
            />
          </FormControl>
          <Button  size="lg" type="submit" colorScheme={"purple"}>Entrar</Button>
          <Link href="/">Voltar</Link>
        </Stack>
      </Flex>
    </Flex>
  )
}