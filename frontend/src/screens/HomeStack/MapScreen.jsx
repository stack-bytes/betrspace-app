import {View, Text} from 'react-native';
import MapView, { MapMarker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';
import { useEffect, useState } from 'react';

import * as Location from 'expo-location';

import { Billboard } from '../../components/Buttons/Billboard';


export default function MapScreen(){

    const [location, setLocation] = useState({
        coords: {
            latitude: 46.770439,
            longitude: 23.591423,
        }
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    },[]);


    return (
        <View className='flex justify-center items-center w-full h-full'>
            <MapView 
                className='w-full h-full'
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                
            
            >
                <MapViewDirections 
                    apikey={GOOGLE_API_KEY}
                    origin={{
                        latitude: location?.coords.latitude,
                        longitude: location?.coords.longitude,
                    }}
                    destination={{latitude: 46.770439, longitude: 23.591423}}
                    strokeWidth={6}
                    strokeColor="#2DC8EA"
                    mode='WALKING'
                />

                <MapMarker 
                    coordinate={location?.coords}
                    title='My Location'
                />
            </MapView>


            <Billboard />

        </View>
    )
}