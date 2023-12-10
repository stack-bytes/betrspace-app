import { View, Text, TouchableOpacity, Image } from "react-native"

import { useNavigation } from "@react-navigation/native";

import ArrowIcon from "../../../assets/icons/arrow-icon.svg";
import MarkerIcon from "../../../assets/icons/marker-icon.svg";
import Disbled1Icon from "../../../assets/icons/disabled1-icon.svg";
import Disbled2Icon from "../../../assets/icons/disabled2-icon.svg";


import { useContext, useState } from "react";
import { UserDataContext } from "../../contexts/UserDataContext";
import { GenericButton } from "../../components/Buttons/GenericButton";

import {SERVER_IP} from "../../../server-config.json";
export default function HelpOutScreen(){
    const navigation = useNavigation();

    const [pending, setPending] = useState(false);

    const {target, alertMarker, setAlertMarker, setTargetLocation, setTarget, latestSos, user} = useContext(UserDataContext);

    const setTargetAlert =  () => {

        if(target) return;
        
        console.log("test",alertMarker);
        
        const targetUserId = '6573da517e0b1dcd1f0e843e';
        
        fetch(`http://192.168.35.111:4949/api/users/findUserProfile?userId=${targetUserId}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setTarget({
                userId: targetUserId,
                username: res.username,
                photo: res.pfp,
                request: 'I need help!',
                coords: alertMarker.coords,
            })

            fetch(`http://${SERVER_IP}:4949/api/sos/addColaborator?colabId=${user.userId}&sosId=${latestSos._id}`, {
                method: 'POST',
            }).then(res => res.json()).then(res => console.warn(res));
    
            navigation.getParent().navigate('HomeStack', {
                screen: 'MapScreen',
            });
    
            setAlertMarker(null);
        })

    }

    const cancelHelpAction = () => {
        if(!latestSos) return;
        
        setTarget(null);

        fetch(`http://${SERVER_IP}:4949/api/sos/addColaborator?colabId=null&sosId=${latestSos._id}`, {
            method: 'POST',
        }).then(res => res.json()).then(res => console.warn(res));

        navigation.getParent().navigate('HomeStack', {
            screen: 'MapScreen',
        });
    }

    return (
        <View className='w-full h-full items-center justify-center'>
            <TouchableOpacity 
                className = 'absolute top-0 right-0 pr-4 mt-16'
                onPress={() => navigation.goBack()}
            >
                <ArrowIcon />
            </TouchableOpacity>

            <View className='w-full pb-3'>
                <Text className='text-2xl text-center'>
                    John Doe needs your help!
                </Text>
            </View>
            <View className='w-[80%] h-80 items-start justify-end'>
                <Image 
                    source={{uri: 'https://image.arrivalguides.com/700x400/13/57b64955e4dc0e64ddfb872fa17d3435.jpg'}}
                    className='w-full h-full absolute rounded-3xl'
                />

                {
                    //Add profile picture
                    target &&
                    <View className='absolute top-3 right-3 justify-center items-center'>
                        <Image
                            source={{uri: target?.photo}}
                            className='w-16 h-16 rounded-3xl shadow-2xl bg-[#000]'
                        />
                    </View>
                }
                <View className='pl-4 pb-4 flex'>
                    <View className='flex-row items-center w-full h-10 justify-start'>
                        <View className='w-6 h-6'>
                            <MarkerIcon width='100%' height='100%' fill='#2DC8EA'/>
                        </View>
                        <Text className='pl-2 text-[#2DC8EA] text-3xl font-semibold'>
                            Piata Unirii
                        </Text>
                    </View>

                    <Text className='text-2xl text-[#fff] font-semibold'>
                        3.5 km
                    </Text>
                </View>
            </View>

            <View className='w-full items-center pt-4'>
                <Text className='text-center text-2xl '>
                    Be mindful of:
                </Text>
                <View className = 'flex-row gap-x-[-12px]'>
                    <TouchableOpacity><Disbled2Icon/></TouchableOpacity>
                    <TouchableOpacity><Disbled1Icon/></TouchableOpacity>
                </View>
            </View>

            <View className='pt-25 pb-10 w-full items-center'>
                {
                    target ? (
                        <View>
                            <GenericButton 
                                buttonText='Contact'
                                onPress={() => navigation.goBack()}
                                width={250}
                                height={60}
                                backgroundColor={'#2DC8EA'}
                                borderColor={'#2DC8EA'}
                            />
                            <GenericButton 
                                buttonText='Cancel'
                                onPress={cancelHelpAction}
                                width={250}
                                height={60}
                                backgroundColor={'#2DC8EA'}
                                borderColor={'#2DC8EA'}
                            />
                        </View>
                    ) : (
                        <GenericButton 
                            buttonText='Accept request'
                            onPress={setTargetAlert}
                            width={250}
                            height={60}
                            backgroundColor={'#2DC8EA'}
                            borderColor={'#2DC8EA'}
                        />
                    )
                }
            </View>
        </View>
    )
}