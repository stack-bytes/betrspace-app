import MapIcon from '../../../assets/icons/map-icon.svg';

import { View } from 'react-native';

export const Billboard = () => {
    return (
        <View className='bg-red-500 w-32 h-32'>
            <MapIcon fill="#fefefe"/>
        </View>
    )
}