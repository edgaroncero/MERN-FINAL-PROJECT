import { createContext, useState } from "react";

export const UserEventsContext = createContext()

export const UserEventsProvider = ({ children }) => {

    const [userEvents, setUserEvents] = useState([])
   

    return (
        <UserEventsContext.Provider value={{ userEvents, setUserEvents }}>
            {children}
        </UserEventsContext.Provider>
    )
}

