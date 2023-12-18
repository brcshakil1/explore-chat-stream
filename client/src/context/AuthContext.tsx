import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ReactNode, createContext, useContext } from "react";

type AuthContext = {

}

type User = {
    id: string,
    name: string,
    image?: string
}

const Context = createContext<AuthContext | null >(null)

export const useAuth = () => {
return useContext(Context)
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthProvider = ({children}:AuthProviderProps) => {

    const signUp = useMutation({
        mutationFn: (user: User) => {
            return axios.post(`${import.meta.env.VITE_SERVER_URL}/signUp`, user)
        }
    })

    return <Context.Provider value={{}}>{children}</Context.Provider>
}