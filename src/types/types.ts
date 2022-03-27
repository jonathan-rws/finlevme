export interface User{
  name: string
  email: string
  uid: string
  balance: number
  token: string
}

export interface AuthProviderProps{
  children: JSX.Element
}

export interface AuthContextProps {
  user: User | null
  isLoading : boolean
  singIn: (email: string, password: string) => Promise<void>
  singUp: (name: string, email: string, password: string) => Promise<void>
  singOut: () => void
}


export interface Transaction{
  id : string
  title: string
  createdAt: string
  value: number
  type: string
  category: string
}