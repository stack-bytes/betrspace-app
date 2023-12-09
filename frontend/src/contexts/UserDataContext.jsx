import { createContext, useEffect, useState } from "react";

//import socket from "../utils/socket";
import  io from "socket.io-client";
import * as Location from 'expo-location';

export const UserDataContext = createContext();

export const UserDataProvider = ({children}) => {
    const [target, setTarget] = useState({
        userId: '6573da517e0b1dcd1f0e843d',
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
            ...target,
            coords: coords,
        })
        
    }

    const setUserLocation = (coords) => {
        setUser({
            ...user,
            coords: coords,
        });
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});

            Location.watchPositionAsync({
                accuracy: Location.Accuracy.Balanced,
                timeInterval: 5000,
                distanceInterval: 10,
            }, (location) => {
                setUserLocation(location.coords);
            });

            setUserLocation(location.coords);
        })();
    },[]);

    useEffect(() => {
    
        const socket = io("http://192.168.35.111:5000",{
            transports: ['websocket'],
        });
    
        socket.io.on("open", () => {
            console.log("OOOFDOFKA");
            console.log("connected to socket");
        });

        const userId = target.userId || '';
        socket.io.on("userLocationUpdate", (data) => {
            console.log(data);
        });

        //socket.io.emit()

        return () => {
            socket.io.disconnect();
        }
      },[]);



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