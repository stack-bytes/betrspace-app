import { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({children}) => {
    const [target, setTarget] = useState({
        coords: {
            latitude: 46.770439,
            longitude: 23.591423,
        },
        username: 'John Doe',
        photo: 'https://doctorat.utcluj.ro/images/utcn-logo.png',
        request: 'I need help!',
    });

    const [alertMarker, setAlertMarker] = useState(null);

    const [user, setUser] = useState(null);
    
    const setTargetLocation = (coords) => {
        setTarget({
            coords: coords,
        });
    }

    return (
        <UserDataContext.Provider value={{
            target,
            setTarget,
            setTargetLocation,
            user,
            setUser,
            alertMarker,
            setAlertMarker,
        }}>
            {children}
        </UserDataContext.Provider>
    )
}