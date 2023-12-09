import MapIcon from '../../../assets/icons/map-icon.svg';
import CloseIcon from '../../../assets/icons/close-icon.svg';
import MarkerIcon from '../../../assets/icons/marker-icon.svg';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GenericButton } from './GenericButton';

export const Billboard = ({onPress, onMainPress, target}) => {
    console.log(target);
    return (
        <View className='bg-[#fff] w-[85%] h-96 top-20 z-20 absolute rounded-[30px] shadow-2xl flex items-center justify-center gap-y-2'>
            <TouchableOpacity 
                className='absolute top-0 right-2 h-8 w-8 justify-center items-center rounded-md'
                onPress={onPress}
            >
                <CloseIcon width='60%' height='100%' fill='black' />
            </TouchableOpacity>
            <View className='w-[90%] h-40 mt-10 flex justify-end'>
                <Image 
                    source={{uri: 'https://image.arrivalguides.com/700x400/13/57b64955e4dc0e64ddfb872fa17d3435.jpg'}}
                    className='w-full h-full rounded-3xl shadow-2xl bg-[#000] absolute'
                />

                <View className='bg-[#000]/[0.25] w-full h-full absolute rounded-3xl'/>

                {
                    //Add profile picture
                    target &&
                    <View className='absolute top-2 right-2 justify-center items-center'>
                        <Image
                            source={{uri: target?.photo}}
                            className='w-16 h-16 rounded-3xl shadow-2xl bg-[#000]'
                        />
                    </View>
                }
                <View className='pl-3 pb-2 flex'>
                    <View className='flex-row items-center w-full h-10 justify-start'>
                        <View className='w-6 h-6'>
                            <MarkerIcon width='100%' height='100%' fill='#2DC8EA'/>
                        </View>
                        <Text className='pl-1 text-[#2DC8EA] text-2xl'>
                            Piata Unirii
                        </Text>
                    </View>

                    <Text className='text-2xl text-[#fff] font-semibold'>
                        3.5 km
                    </Text>
                </View>
            </View>

            <View className='w-[90%] h-16 items-center pt-1'>
                <Text className='text-xl text-center font-semibold'>
                    A person needs help!
                </Text>

                <Text className='italic text-2xl text-[#2DC8EA]'>
                    "I'm lost and I need help!"
                </Text>
            </View>

            <View className='w-[90%] h-16 items-center'>
                <GenericButton 
                    backgroundColor={'#2DC8EA'}
                    borderColor={'#2DC8EA'}
                    buttonText={'Details'}
                    height={56}
                    onPress={onMainPress}
                />
            </View>
        </View>
    )
}