import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import ProfileIcon from '../../assets/icons/profilePic-icon.svg';

export default function ProfileComponent({height, width, userName, userAge, userHeading}) {
    

    return (
        <View style = {styles.shadow} className = 'pt-6 w-[83%] h-[170px] flex items-center bg-[#FFFF] rounded-[20px]'>
            <View style = {[
                    {height: height ? height : 148},
                    {width: width ? width : '85%'}
                ]}
                  className = 'flex-row gap-x-3 gap-y-3 rounded-[25px] bg-slate-950/[.15]'
            >
                <View className = 'flex-row'>

                    <View className ='ml-[-5px] w-[120px] h-[120px] items-center rounded-[20px]'>
                            <ProfileIcon width = '120%' height = '100%'/>
                    </View>

                    <View className ='ml-[5px] w-[170px] h-[120px] items-center rounded-[20px]'>
                        <Text className = 'pt-4 text-[18px]'>{userName}</Text>
                        
                        <View className = 'flex-row pt-[3px]'>
                            <Text className = 'text-[18px]'>{userAge} y/o - </Text>
                            <Text className = 'text-[#FFC700] font-semibold text-[18px]'>{userHeading}</Text>
                        </View>

                        <TouchableOpacity className = 'pt-3'>
                            <Text className = ' text-[#2DC8EA] text-[12px]'>tap to view profile</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#000000',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    }
})
