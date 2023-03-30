import { createContext, useState } from "react";

export const LoginContext = createContext(false)

export const LoginProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false)
    const [userLogged, setUserLogged] = useState('')

    return (
        <LoginContext.Provider value={{ setIsLogin, isLogin, userLogged, setUserLogged}}>
            {children}
        </LoginContext.Provider>
    )
}

