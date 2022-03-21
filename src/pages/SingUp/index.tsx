import { Button, Flex, FormControl, FormLabel, Input, Link, Stack } from "@chakra-ui/react";

export function SingUp() {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      align={"center"}
      justify={"center"}
    >
      <Flex
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
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
              variant={"filled"}
              bg={"gray.900"}
              focusBorderColor="purple.500"
              name=" email"
              type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
              variant={"filled"}
              bg={"gray.900"}
              focusBorderColor="purple.500"
              name=" password"
              type="password" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password-confirme">Confirmar Senha</FormLabel>
            <Input
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
              variant={"filled"}
              bg={"gray.900"}
              focusBorderColor="purple.500"
              name=" password-confirme"
              type="password" />
          </FormControl>
          <Button size="lg" type="submit" colorScheme={"purple"}>Entrar</Button>
          <Link href="/">Voltar</Link>
        </Stack>
      </Flex>
    </Flex>
  )
}