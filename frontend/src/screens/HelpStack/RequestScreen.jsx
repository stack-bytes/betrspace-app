import {View, Text, TouchableOpacity, TextInput} from 'react-native';  
import AlertIcon from '../../../assets/icons/alert-icon.svg';
import ArrowIcon from '../../../assets/icons/arrow-icon.svg';
import {GenericButton} from '../../components/Buttons/GenericButton';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function RequestScreen() {
    const [text, setText] = useState('');
    
    const navigation = useNavigation();

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

            <View style = {{dropShadow: '12px'}} className = 'mb-44 h-14 w-[85%] items-center justify-center border-[1px] rounded-[25px] bg-slate-950/[.15]'>
                <TextInput
                    placeholder = "Your problem ..."
                    placeholderTextColor = "rgb(192, 192, 192, 1)"
                    onChangeText={newText => setText(newText)}
                    defaultValue = {text}
                    className = 'pl-2 w-full h-full text-[20px] text-white'	
                    returnKeyType="done"
                />
            </View>
            
            
            <GenericButton
                buttonText = "Search for Help"
                textColor={'black'}
                backgroundColor={'#2DC8EA'}
                borderColor={'#2DC8EA'}
                textSize={20}
            />  
            
            
            

        </View>
    )
}