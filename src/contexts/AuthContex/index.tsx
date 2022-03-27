import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProps, User, AuthProviderProps } from '../../types/types'
import { AuthenticateUser, createUserAccount } from "./utils";


const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

  useEffect(() => {
    const data = localStorage.getItem('token')
    if (data) {
      setUser(JSON.parse(data))
    }
    setIsLoading(false)
    
  }, [])

  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  async function singIn(email: string, password: string) {

    const user = await AuthenticateUser(email, password)
    setUser(user)
    localStorage.setItem('token', JSON.stringify(user))
  }
  async function singUp(name: string, email: string, password: string) {
    const user = await createUserAccount(name, email, password)
    setUser(user)
    localStorage.setItem('token', JSON.stringify(user))
  }
  async function singOut() {
    setUser(null)
    localStorage.clear()
  }


  return (
    <AuthContext.Provider value={{ user, isLoading, singIn, singUp, singOut }}>
      {children}
    </AuthContext.Provider>

  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return (context)
}