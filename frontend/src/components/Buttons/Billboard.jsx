import MapIcon from '../../../assets/icons/map-icon.svg';
import CloseIcon from '../../../assets/icons/close-icon.svg';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GenericButton } from './GenericButton';

export const Billboard = ({onPress}) => {

    return (
        <View className='bg-[#fff] w-[85%] h-96 top-20 z-20 absolute rounded-[30px] shadow-2xl flex items-center justify-center gap-y-2'>
            <TouchableOpacity 
                className='absolute top-0 right-2 h-8 w-8 justify-center items-center rounded-md'
                onPress={onPress}
            >
                <CloseIcon width='60%' height='100%' fill='black' />
            </TouchableOpacity>
            <View className='w-[90%] h-40 mt-10'>
                <Image 
                    source={{uri: 'https://image.arrivalguides.com/700x400/13/57b64955e4dc0e64ddfb872fa17d3435.jpg'}}
                    className='w-full h-full rounded-3xl shadow-2xl bg-[#000]'
                />
                <View className='bg-[#000]/[0.25] w-full h-full absolute rounded-3xl'/>
                <Text className='absolute bottom-2 left-3 text-3xl text-[#fff] font-semibold'>
                    3.5 km
                </Text>
            </View>

            <View className='w-[90%] h-16 items-center pt-2'>
                <Text className='text-xl text-center font-semibold'>
                    Alex needs your help with speaking to the staff!
                </Text>
            </View>

            <View className='w-[90%] h-16 items-center'>
                <GenericButton 
                    backgroundColor={'#2DC8EA'}
                    borderColor={'#2DC8EA'}
                    buttonText={'Help him out!'}
                    height={56}
                />
            </View>
        </View>
    )
}