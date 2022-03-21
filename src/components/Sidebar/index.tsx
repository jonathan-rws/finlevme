import { useBreakpointValue, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, Box, DrawerContent, Input, DrawerFooter, Button, } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContexts";
import { SidebarNav } from "../SidebarNav";

export function Sidebar() {

  const {isOpen, onClose} = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    isWideVersion
      ? <Box as="aside" w='64' mr="8">
        <SidebarNav />
      </Box>
      : <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={() => { }}

      >
        <DrawerOverlay >
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton onClick={onClose}/>
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>


          </DrawerContent>
        </DrawerOverlay >
      </Drawer>
  )
}