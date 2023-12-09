import { createContext } from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({children}) => {
    const [target, setTarget] = useState(null);

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
        }}>
            {children}
        </UserDataContext.Provider>
    )
}