import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const  ThemeProvider  =  ({ children })  =>  {
    const  [toggle, setToggle]  = useState(false)

    const handleToggle = () => {
    setToggle(!toggle);
    }

  return  (
    <ThemeContext.Provider value={{ toggle, handleToggle }}>
        {children}
    </ThemeContext.Provider>
    )
}

