import {View, Text, TouchableOpacity} from 'react-native';
import MapView, { MapMarker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';
import { useContext, useEffect, useRef, useState } from 'react';

import * as Location from 'expo-location';

import RunIcon from "../../../assets/icons/run-icon.svg";
import UserIcon from "../../../assets/icons/user-icon.svg";
import AlertIcon from "../../../assets/icons/alert-icon.svg";

import { useNavigation } from '@react-navigation/native';

import { Billboard } from '../../components/Buttons/Billboard';
import ArrivingHelpComponent from '../../components/ArrivingHelpComponent'
import { UserDataContext } from '../../contexts/UserDataContext';
import io from 'socket.io-client';

export default function MapScreen(){

    const mapRef = useRef(null);

    const navigation = useNavigation();

    const [billboardActive, setBillboardActive] = useState(true);
    const [arrivingHelp, setArrivingHelp] = useState(false);

    const toggleBillboard = () => {
        setBillboardActive(!billboardActive);
    }

    const toggleArrivingHelp = () => {
        setArrivingHelp(!arrivingHelp);
    }

    useEffect(() => {
    
        const socket = io("http://192.168.35.111:5000",{
            transports: ['websocket'],
        });
        //setCurrentSocket(socket);
        socket.io.on("open", () => {
            console.warn("connected to socket");
            socket.emit("getLocation", {userId: '6573da517e0b1dcd1f0e843d'}, (ack) => {
                console.warn("ack",ack);
            } );
        });
    
        socket.on("userLocationUpdate", ({userId, change}) => {
            console.log(change);
            console.log("GOOTOOTROTOROTOTOTOTOTOTOTOTT");
        });
    
    
        return () => {
            socket.io.disconnect();
        }
      },[]);


    const {target, setTarget, alertMarker, setAlertMarker, user} = useContext(UserDataContext);

    const simulateAlert = () => {
        //if(target) return;
        setAlertMarker({
            coords: {
                latitude: 46.760439,
                longitude: 23.591476,
            }
        });
        
        mapRef.current.animateToRegion({
            latitude: 46.763090,
            longitude: 23.591476,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }, 1000);

        setBillboardActive(true);
    }

    const navigateToHelpOut = () => {
        navigation.getParent().navigate('HelpStack', {
            screen: 'HelpOutScreen',
        });
    }

    
    return (
        <View className='flex justify-center items-center w-full h-full'>
            <MapView 
                ref={(ref) => mapRef.current = ref}
                className='w-full h-full'
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: user?.coords.latitude || 46.770439,
                    longitude: user?.coords.longitude || 23.591423,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            
            >
                <MapViewDirections 
                    apikey={GOOGLE_API_KEY}
                    origin={{
                        latitude: user?.coords.latitude,
                        longitude: user?.coords.longitude,
                    }}
                    destination={{
                        latitude: target?.coords.latitude,
                        longitude: target?.coords.longitude,
                    }}
                    strokeWidth={3}
                    strokeColor="#A1679E"
                    mode='WALKING'
                />

                <MapMarker 
                    coordinate={user?.coords}
                    title='My Location'
                    style={{
                        width: 50,
                        height: 50,
                    }}  
                >
                    <View className='w-full h-full bg-[#fff] rounded-full justify-center items-center'>
                        <UserIcon width='50%' height='100%' fill='#A1679E' style={{
                            transform: [{rotate: `${(user?.coords.heading)}deg`}]
                        
                        }}/>
                    </View>
                </MapMarker>

                <MapMarker 
                    coordinate={target?.coords}
                    title='SOS'
                    description='Help me!'
                    style={{
                        width: 50,
                        height: 50,
                    }}
                    onPress={toggleBillboard}
                >
                    <View className='w-full h-full bg-[#fff] rounded-full justify-center items-center'>
                        <RunIcon width='60%' height='100%' fill='#A1679E'/>
                    </View>
                </MapMarker>

                {
                    alertMarker && 
                    <MapMarker 
                        coordinate={alertMarker?.coords}
                        title='Help me!'
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    >
                        <View className='w-full h-full bg-[#fff] rounded-full justify-center items-center'>
                            <AlertIcon width='60%' height='100%' fill='#A1679E'/>
                        </View>
                    </MapMarker>
                }

            </MapView>

            {
                billboardActive && 
                <Billboard 
                    onPress={toggleBillboard} 
                    onMainPress={navigateToHelpOut}
                    target={target}
                />
            }

            {
                arrivingHelp &&
                <ArrivingHelpComponent 
                    onPress={toggleArrivingHelp}    
                    userName={target?.username}
                    arrivalTime = '4'
                />
            }

            <TouchableOpacity 
                className='absolute top-48 right-4 rounded-full w-10 h-10 bg-[#fff]'
                onPress={simulateAlert}
            />
            <TouchableOpacity 
                className='absolute top-96 right-4 rounded-full w-10 h-10 bg-[#fff]'
                onPress={toggleArrivingHelp}
            />

            <TouchableOpacity 
                className='absolute top-48 right-4 rounded-full w-10 h-10 bg-[#fff]'
                onPress={simulateAlert}
            />

        </View>
    )
}