import { createContext, useEffect, useState } from "react";

//import socket from "../utils/socket";
import  io from "socket.io-client";
import * as Location from 'expo-location';

export const UserDataContext = createContext();


export const UserDataProvider = ({children}) => {

    const [currentSocket, setCurrentSocket] = useState(null);

    const [target, setTarget] = useState(
        /*userId: '6573da517e0b1dcd1f0e843e',
        coords: {
            latitude: 46.770439,
            longitude: 23.591423,
        },
        username: 'John Doe',
        photo: 'https://doctorat.utcluj.ro/images/utcn-logo.png',
        request: 'I need help!',*/
        null
    );

    const [alertMarker, setAlertMarker] = useState(null);

    const [user, setUser] = useState({
        userId: '6573da517e0b1dcd1f0e843d',
        photo: 'https://doctorat.utcluj.ro/images/utcn-logo.png',
        coords: {
            latitude: 46.770439,
            longitude: 23.591423,
        },
    });

    const [latestSos, setLatestSos] = useState(null);

    const [myLatestRequest, setMyLatestRequest] = useState(null);
    
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

            const foundUser = await fetch(`http://192.168.35.111:4949/api/users/findUserProfile?userId=${user.userId}`);

            const foundUserJson = await foundUser.json();
            
            console.log('Fetched user from db');

            setUser({
                ...user,
                username: foundUserJson.username,
                pfp: foundUserJson.pfp,
                coords: location.coords,
            });

            //console.warn('Set user data', user);

        })();
    },[]);

    useEffect(() => {
    
        const socket = io("http://192.168.35.111:5000",{
            transports: ['websocket'],
        });
        setCurrentSocket(socket);
        socket.io.on("open", () => {
            //console.warn("connected to socket");
            socket.emit("getLatest");
        });

        socket.on("latestSos", (data) => {
            //console.warn("latestSos", data);
            //if(latestSos && data._id != latestSos._id) return;
            setLatestSos(data);
        })
    
        socket.on("userLocationUpdate", ({userId, data}) => {

            setTargetLocation(data.location);

            //console.warn('Updated target location', data.location);

        });
    
    
        return () => {
            socket.io.disconnect();
        }
      },[]);


      useEffect(() => {
        //Get target user location when target changes
        if(!currentSocket) return;

        if(!target || !target.userId) return;

        console.log("Target changed", target);

        currentSocket.emit("getLocation", {userId: target.userId});
      },[target]);

      useEffect(() => {
        //Send user location when user changes
        if(!currentSocket) return;

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
            latestSos,
            setLatestSos,
            myLatestRequest,
            setMyLatestRequest,
        }}>
            {children}
        </UserDataContext.Provider>
    )
}