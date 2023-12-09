import { View, Text, TouchableOpacity } from 'react-native';
import ProfilePicIcon from '../../assets/icons/profilePic-icon.svg';
import PhoneIcon from '../../assets/icons/phone-icon.svg';
import { GenericButton } from './Buttons/GenericButton';

export default function ArrivingHelpComponent({userName, arrivalTime}) {
    return (
        <View className='bg-[#fff] w-[85%] h-60 top-20 z-20 absolute rounded-[30px] shadow-2xl flex items-center gap-y-2'>
            <Text className = 'pb-6 top-6 text-[#2DC8EA] text-[30px]'>Help is arriving!</Text>

            <View className = 'pl-2 flex-row w-full h-[70px]'>
                <ProfilePicIcon height = '90%'/>
                <Text className = 'ml-[-10px]'>{userName}</Text>
                <TouchableOpacity
                    className = 'absolute top-3 right-3 h-10 w-12'
                >
                    <PhoneIcon width = '100%' height = '100%'/>
                </TouchableOpacity>
            </View>

            <View className = 'flex-row h-[70px] w-[300px]'>
                <View className = 'pt-1 absolute left-2 flex-col items-center'>
                    <Text >estimated time:</Text>
                    <Text className = 'font-bold text-[20px] text-[#FFD700]'>{arrivalTime} min</Text>
                </View>

                <View className = 'absolute right-0 bottom-3 w-[50%]'>
                    <GenericButton
                        buttonText={'Cancel'}
                        textColor={'black'}
                        backgroundColor={'#A1679E'}
                        borderColor={'#A1679E'}
                        width= {'150px'}
                    />
                </View>
                
            </View>
        </View>
    )
}