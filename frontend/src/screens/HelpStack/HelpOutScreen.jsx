import { View, Text, TouchableOpacity, Image } from "react-native"

import { useNavigation } from "@react-navigation/native";

import ArrowIcon from "../../../assets/icons/arrow-icon.svg";
import MarkerIcon from "../../../assets/icons/marker-icon.svg";

import { useContext, useState } from "react";
import { UserDataContext } from "../../contexts/UserDataContext";
import { GenericButton } from "../../components/Buttons/GenericButton";

export default function HelpOutScreen(){
    const navigation = useNavigation();

    const [pending, setPending] = useState(false);

    const {target, setTarget, alertMarker, setAlertMarker} = useContext(UserDataContext);

    const setTargetAlert = () => {
        setTarget(
            {
                coords: {
                    latitude: alertMarker.coords.latitude,
                    longitude: alertMarker.coords.longitude,
                },
                username: 'John Doe',
                photo: 'https://doctorat.utcluj.ro/images/utcn-logo.png',
                request: 'I need help with speaking to staff!',
            }
        );

        navigation.getParent().navigate('HomeStack', {
            screen: 'MapScreen',
        });

        setAlertMarker(null);

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
                    {target?.username} needs your help!
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
            </View>

            <View className='pt-32 pb-10 w-full items-center'>
                {
                    pending ? (
                        <View className='w-[80%] items-center'>
                            <Text className='text-4xl font-semibold'>
                                Request sent!
                            </Text>
                            <Text className='text-xl font-semibold text-[#2DC8EA]'>
                                Waiting for {target?.username} to accept...
                            </Text>
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