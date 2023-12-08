import {View, Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_API_KEY} from '@env';

export default function MapScreen(){
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
                    origin={{latitude: 10.762622, longitude: 106.660172}}
                    destination={{latitude: 10.8342, longitude: 106.660172}}
                    strokeWidth={3}
                    strokeColor="hotpink"
                />
            </MapView>
        </View>
    )
}