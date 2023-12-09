import { createContext, useEffect, useState } from "react";

//import socket from "../utils/socket";
import  io from "socket.io-client";
import * as Location from 'expo-location';

export const UserDataContext = createContext();


export const UserDataProvider = ({children}) => {

    const [currentSocket, setCurrentSocket] = useState(null);

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
        console.log("test",coords)
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
        setCurrentSocket(socket);
        socket.io.on("open", () => {
            console.warn("connected to socket");
        });
    
        socket.on("userLocationUpdate", ({userId, data}) => {

            setTargetLocation(data.location);

            console.warn('Updated target location', data.location);

        });
    
    
        return () => {
            socket.io.disconnect();
        }
      },[]);


      useEffect(() => {
        //Get target user location when target changes
        if(!currentSocket) return;

        currentSocket.emit("getLocation", {userId: target.userId});
      },[target]);

      useEffect(() => {
        //Send user location when user changes
        if(!currentSocket) return;

        console.log("user changed",user);
        console.log("currentSocket",currentSocket);

        currentSocket.emit("sendLocation", {
            userId: user.userId,
            latitude: user.coords.latitude,
            longitude: user.coords.longitude,
        });
      },[user]);



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