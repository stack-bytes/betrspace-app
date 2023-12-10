import { View, Text, TouchableOpacity } from 'react-native';
import ProfilePicIcon from '../../assets/icons/profilePic-icon.svg';
import PhoneIcon from '../../assets/icons/phone-icon.svg';
import { GenericButton } from './Buttons/GenericButton';
import * as Speech from 'expo-speech'; 
import { SERVER_IP } from '../../server-config.json';
import { useContext } from 'react';
import { UserDataContext } from '../contexts/UserDataContext';



export default function ArrivingHelpComponent({userName, arrivalTime}) {
    const speak = () => {
        const thingToSay  = `${userName} is arriving in ${arrivalTime} minutes`;
        Speech.speak(thingToSay);
    }
    const {latestSos, setLatestSos, setTarget} = useContext(UserDataContext);
    // Speech.getAvailableVoicesAsync().then(voices => {
    //     console.log(voices);
    // })

    const cancelRequest = () => {
        if(!latestSos) return console.warn("No latestSos");
        fetch(`http://${SERVER_IP}:4949/api/sos/removeSos?deletedSosId=${latestSos._id}`, {
            method: 'DELETE',
        
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                setLatestSos(null);
                setTarget(null);
                console.log("Request cancelled");
            }
        })
    }

    return (

        <View className='bg-[#fff] w-[85%] h-64 top-20 z-20 absolute rounded-[30px] shadow-2xl flex items-center gap-y-2'>
            <Text className = 'pb-6 top-4 text-black text-[30px]'>Help is arriving!</Text>
            
               { Speech.speak(`${userName} is arriving in ${arrivalTime} minutes`) }
            

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
                        onPress = {cancelRequest}
                    />
                </View>
                
            </View>
        </View>
    )
}