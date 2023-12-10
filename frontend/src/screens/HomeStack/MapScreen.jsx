import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, { MapMarker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';
import { useContext, useEffect, useRef, useState } from 'react';

import * as Location from 'expo-location';

import RunIcon from "../../../assets/icons/run-icon.svg";
import UserIcon from "../../../assets/icons/user-icon.svg";
import AlertIcon from "../../../assets/icons/alert-icon.svg";

import { useIsFocused, useNavigation } from '@react-navigation/native';

import { Billboard } from '../../components/Buttons/Billboard';
import ArrivingHelpComponent from '../../components/ArrivingHelpComponent'
import { UserDataContext } from '../../contexts/UserDataContext';
import io from 'socket.io-client';

export default function MapScreen(){

    const mapRef = useRef(null);

    const navigation = useNavigation();

    const [billboardActive, setBillboardActive] = useState(false);
    const [arrivingHelp, setArrivingHelp] = useState(false);

    const toggleBillboard = () => {
        setBillboardActive(!billboardActive);
        console.log('toggle_billboard');
    }

    const toggleArrivingHelp = () => {
        setArrivingHelp(!arrivingHelp);
    }

    const {target, setTarget, alertMarker, setAlertMarker, user, latestSos} = useContext(UserDataContext);

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

        toggleBillboard();
    }

    const navigateToHelpOut = () => {
        navigation.getParent().navigate('HelpStack', {
            screen: 'HelpOutScreen',
        });
    }

    useEffect(() => {
        //Receive SOS
        if(!latestSos || target) return;

        console.log('RECEIVED SOS', latestSos);
        
        setAlertMarker({
            coords: {
                latitude: latestSos.location.latitude,
                longitude: latestSos.location.longitude,
            },
        });

        console.log(alertMarker);

        mapRef.current.animateToRegion({
            latitude: String(Number(latestSos.location.latitude) + 0.0025),
            longitude: latestSos.location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }, 1000);

        setBillboardActive(true);

    },[latestSos])

    const isFocused = useIsFocused();

    useEffect(() => {
        if(target) return;

        console.log("TARGET", target);
        console.log("USER", user);

        setBillboardActive(false);
    },[isFocused]);

    
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
                        latitude: target?.coords?.latitude,
                        longitude: target?.coords?.longitude,
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
                    alertMarker && !target &&
                    <MapMarker 
                        coordinate={alertMarker?.coords}
                        title='Help me!'
                        style={{
                            width: 50,
                            height: 50,
                        }}
                        onPress={toggleBillboard}
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
                    target={{
                        username: 'test',
                        distance: '4',
                    }}
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

            {
                true && 
                <View style = {styles.shadow} className='absolute top-20 w-[80%] h-[10%] bg-[#FFFF] justify-center rounded-3xl'>
                    <Text className='text-[20px] text-black font-semibold text-center'>
                        Currently helping:
                    </Text>
                    <Text className='text-2xl text-[#2DC8EA] font-semibold text-center'>
                        {target?.username ? target?.username : '....'}
                    </Text>
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

    }
})