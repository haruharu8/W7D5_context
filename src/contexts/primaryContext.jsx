
import { createContext, useState } from "react";

//create the context itself. This is what components will import
export const primaryContext = createContext();

//create the Provider. Thsi is what will surround the app

export const PrimaryProvider = (props) => {
    // 1. create our state that our app needs
    // put state for many components
    const [user, setUser] = useState({
        name: 'Jared',
        email: 'Jared@gmail.com'
    })
    const [activities, setActivities] = useState([ 'basketball', 'running', 'poker'])

    // 2. return the ACTUAL provider of the context
    return ( 
        <primaryContext.Provider value={
            {
                user: user,
                setUser: setUser,
                activities: activities,
                setActivities: setActivities
            }
        }>
                {props.children}
        </primaryContext.Provider>
    )

}