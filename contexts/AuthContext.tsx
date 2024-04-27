import { createContext, ReactNode, useState } from 'react'

type User = {
  id: Number
  email: String
  name: String
  last_name: String
}

type AuthProps = {
  user: User
  isAuth: boolean
  token: String
  setIsAuth: (isAuth: boolean) => void
  setUser: (user: User) => void
  setToken: (token: String) => void
}

type AuthProviderProps = {
  children?: ReactNode
}

export const AuthContext = createContext<AuthProps>({} as any)

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuth, _setIsAuth] = useState(false)
  const [token, _setToken] = useState<String>('')
  const [user, _setUser] = useState<User>({ id: 0, email: '', name: '', last_name: '' })

  function setIsAuth(isAuth: boolean) {
    _setIsAuth(isAuth)
  }

  function setToken(token: String) {
    _setToken(token)
  }

  function setUser(user: User) {
    _setUser(user)
  }

  return (
    <AuthContext.Provider value={{
      isAuth, token, user,
      setIsAuth, setToken, setUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}