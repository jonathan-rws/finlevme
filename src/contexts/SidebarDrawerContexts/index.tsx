import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SidebarDrawerContextsProps {
  children: JSX.Element
}


const SidebarDrawerContexts = createContext({} as UseDisclosureReturn)

export function SidebarDrawerProvider({ children }: SidebarDrawerContextsProps) {
  const disclosure = useDisclosure()
  const { pathname } = useLocation()

  useEffect(() => {
    disclosure.onClose()
  }, [pathname])


  return (
    <SidebarDrawerContexts.Provider value={disclosure}>
      {children}
    </SidebarDrawerContexts.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContexts)