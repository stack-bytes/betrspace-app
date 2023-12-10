import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';  
import AlertIcon from '../../../assets/icons/alert-icon.svg';
import ArrowIcon from '../../../assets/icons/arrow-icon.svg';
import {GenericButton} from '../../components/Buttons/GenericButton';
import {useContext, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import * as speech from 'expo-speech';

import {GenericInput} from "../../components/Buttons/GenericInput"

import React, { useEffect } from 'react';
import io from 'socket.io-client';
import {SERVER_IP} from "../../../server-config.json";
import { UserDataContext } from '../../contexts/UserDataContext';


export default function RequestScreen() {
    const [text, setText] = useState('');
    
    const navigation = useNavigation();
    const { user, setMyLatestRequest } = useContext(UserDataContext);
    const serverUrl = 'http://'+SERVER_IP+':5000';

    const sendSos = () => {
        const socket = io(serverUrl, {
            transports: ['websocket'],
        });
    
        try {
            socket.on("connect", async () => {
                socket.emit('createSos', {
                    latitude: await user?.coords.latitude + 0.01,
                    longitude: await user?.coords.longitude,
                    description: "lorem impsum",
                    personInNeedId: user.userId,
                });
                socket.disconnect();
            });
        } catch (ex) {
            console.log("Could not emit ", ex);
        }
    }


    

    return (
        <View className = 'pt-32 flex items-center w-full h-full'>
            <TouchableOpacity 
                className = 'absolute top-0 right-0 pr-4 mt-16'
                onPress={() => navigation.goBack()}
            >
                <ArrowIcon />
            </TouchableOpacity>

            <View className='h-48 w-[80%] mb-10'>
                <AlertIcon width='100%' height='100%' fill='#A1679E'/>
            </View>
            <Text className = 'text-[35px] pb-8'>Request Help</Text>

            <View className = 'mb-44 h-14 w-[85%] items-center justify-center rounded-[25px] bg-slate-950/[.15]'>
                <GenericInput></GenericInput>
            </View>
             
            
            <GenericButton
                buttonText = "Community Help"
                textColor={'black'}
                backgroundColor={'#2DC8EA'}
                borderColor={'#2DC8EA'}
                textSize={20}
                onPress = {() => {
                    sendSos();
                    navigation.navigate('ArrivingHelpScreen')}
                }
            />  
            
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    }
})