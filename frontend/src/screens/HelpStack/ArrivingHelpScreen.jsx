import { View, Text, TouchableOpacity} from 'react-native'
import ArrowIcon from '../../../assets/icons/arrow-icon.svg';
import { CommonActions, useNavigation } from '@react-navigation/native';
import RunIcon from '../../../assets/icons/runFast-icon.svg'
import ProfileComponent  from '../../components/ProfileComponent'
import { GenericButton } from '../../components/Buttons/GenericButton';
import { cancelRequest } from '../../components/ArrivingHelpComponent';
import { useContext } from 'react';
import { UserDataContext } from '../../contexts/UserDataContext';
import {SERVER_IP} from '../../../server-config.json';


export default function ArrivingHelpScreen() {
    const navigation = useNavigation();

    const {latestSos, setLatestSos, setTarget} = useContext(UserDataContext);

    const cancelRequest = () => {
        if(!latestSos) return console.warn("No latestSos");
        console.warn("Printed out", latestSos);
        fetch(`http://${SERVER_IP}:4949/api/sos/removeSos?deletedSosId=${latestSos._id}`, {
            method: 'DELETE',
        
        })
        .then(res => res.json())
        .then(data => {
            setLatestSos(null);
            setTarget(null);
            navigation.getParent().navigate('HomeStack', {
                screen: 'MapScreen',
            });
            console.log("Request cancelled");
        })
    }

    return (
        <View className = 'w-full h-full flex items-center justify-center'>
            <TouchableOpacity 
                className = 'absolute top-0 right-0 pr-4 mt-16'
                onPress={() => navigation.goBack()}
            >
                <ArrowIcon />
            </TouchableOpacity>
            <View className='px-4 w-full items-center'>
                <Text className = 'pb-4 text-center text-primary text-[30px] font-semibold'>Your request has been sent!</Text>
                <Text className = 'pb-8 text-center text-primary text-[25px] '>Searching for nearby help...</Text>

                <View className='w-[80%] h-16 justify-center'>
                    <GenericButton 
                        buttonText={'Cancel Request'}
                        width={'100%'}
                        height={'100%'}
                        backgroundColor={'#2DC8EA'}
                        borderColor={'#2DC8EA'}
                        onPress={cancelRequest}
                    />
                </View>
            </View>
        </View>
    )
}