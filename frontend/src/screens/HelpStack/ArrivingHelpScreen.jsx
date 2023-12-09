import { View, Text, TouchableOpacity} from 'react-native'
import ArrowIcon from '../../../assets/icons/arrow-icon.svg';
import { useNavigation } from '@react-navigation/native';
import RunIcon from '../../../assets/icons/runFast-icon.svg'
import ProfileComponent  from '../../components/ProfileComponent'


export default function ArrivingHelpScreen() {
    const navigation = useNavigation();

    return (
        <View className = 'pt-32 w-full h-full flex items-center'>
            <TouchableOpacity 
                className = 'absolute top-0 right-0 pr-4 mt-16'
                onPress={() => navigation.goBack()}
            >
                <ArrowIcon />
            </TouchableOpacity>

            <Text className = 'pb-8 text-[#A1679E] text-[30px] font-semibold'>Help is arriving!</Text>
            
            <ProfileComponent
                userName = 'George Michael'
                userAge = '28'
                userHeading = 'helper'
            />
        </View>
    )
}