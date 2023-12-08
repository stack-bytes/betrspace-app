import {View, Text} from 'react-native';
import MapView, { MapMarker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';
import { useEffect, useState } from 'react';

import * as Location from 'expo-location';

export default function MapScreen(){

    const [location, setLocation] = useState({
        coords: {
            latitude: 10.762622,
            longitude: 106.660172,
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
                    latitude: 10.762622,
                    longitude: 106.660172,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                
            
            >
                <MapViewDirections 
                    apikey={GOOGLE_API_KEY}
                    origin={location?.coords}
                    destination={{latitude: 10.834222, longitude: 106.660172}}
                    strokeWidth={3}
                    strokeColor="hotpink"
                />

                <MapMarker 
                    coordinate={location?.coords}
                    title='My Location'
                />
            </MapView>
        </View>
    )
}