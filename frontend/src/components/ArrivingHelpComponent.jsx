import { View, Text, TouchableOpacity } from 'react-native';
import ProfilePicIcon from '../../assets/icons/profilePic-icon.svg';
import PhoneIcon from '../../assets/icons/phone-icon.svg';
import { GenericButton } from './Buttons/GenericButton';

export default function ArrivingHelpComponent({userName, arrivalTime}) {
    return (
        <View className='bg-[#fff] w-[85%] h-64 top-20 z-20 absolute rounded-[30px] shadow-2xl flex items-center gap-y-2'>
            <Text className = 'pb-6 top-4 text-black text-[30px]'>Help is arriving!</Text>

            <View className = 'pl-2 flex-row w-full h-[80px]'>
                <ProfilePicIcon height = '90%'/>
                <View className = 'flex-col'>
                    <Text className = 'ml-[-10px]'>{userName}</Text>
                    <Text className = 'ml-[-8px]'>4.9 <Text className = 'text-black'>☆</Text></Text>
                </View>
                <View className = 'absolute top-0 right-3 w-[40%]'>
                    <GenericButton
                        buttonText={'Call'}
                        textColor={'black'}
                        backgroundColor={'#2DC8EA'}
                        borderColor={'#2DC8EA'}
                        width = {'150px'}
                    />
                </View>
            </View>

            <View className = 'flex-row h-[70px] w-[320px]'>
                <View className = 'pt-1 absolute left-5 flex-col items-center'>
                    <Text >estimated time:</Text>
                    <Text className = 'font-bold text-[20px] text-[#FFD700]'>{arrivalTime} min</Text>
                </View>

                <View className = 'absolute right-2 bottom-2 w-[40%]'>
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