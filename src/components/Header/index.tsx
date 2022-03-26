import { Avatar, Box, Flex, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine, RiLogoutBoxLine } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContex";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContexts";

export function Header() {

const {user} = useAuth()
  const {singOut} = useAuth()
  const {onOpen} = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex as="header"
      w={"100%"}
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
     
    >
     
      {!isWideVersion &&
        (<IconButton
          
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Abre menu"
          mr="2"
          mt="2"
        />
        )}
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        finlevme
        <Text as="span" color={"purple.500"} ml="1">.</Text>
      </Text>
      <Flex
        align="center"
        ml="auto"
      >
       
        <Flex align="center">
          {isWideVersion && <Box mr="4" textAlign="right">
            <Text>{user?.name}</Text>
            <Text color="gray.300" fontSize="small">{user?.email}</Text>
          </Box>}
          <IconButton
          
          icon={<Icon as={RiLogoutBoxLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={singOut}
          aria-label="Abre menu"
          mr="2"
          mt="2"
        />
          <Flex
            borderRadius="50%"
            align='center'
            justify="center"
            height="54px"
            width="54px"
            bgGradient='linear(to-l, purple.700, purple.400 )'
          >
            

            <Avatar
              name="Jonathan Martins"
              w="50px"
              h="50px"
              src="https://avatars.githubusercontent.com/u/84754727?v=4"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}