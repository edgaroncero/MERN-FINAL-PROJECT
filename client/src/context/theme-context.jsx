import { createContext, useState } from "react";

export const ThemeContext = createContext();


export const  ThemeProvider  =  ({ children })  =>  {
    const  [toggle, setToggle]  = useState(false)

    const handleToggle = () => {
    setToggle(!toggle);
    }

    const theme = toggle ? darkTheme : lightTheme;

  return  (
    <ThemeContext.Provider value={{ toggle, handleToggle, theme}}>
        {children}
    </ThemeContext.Provider>
    )
}

