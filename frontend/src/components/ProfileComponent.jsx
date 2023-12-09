import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import ProfileIcon from '../../assets/icons/profilePic-icon.svg';

export default function ProfileComponent({height, width, userName, userAge, userHeading}) {
    

    return (
        <View style = {styles.shadow} className = 'pt-2 w-full h-full flex items-center'>
            <View style = {[
                    {height: height ? height : 148},
                    {width: width ? width : '85%'}
                ]}
                  className = 'flex-row gap-x-3 gap-y-3 rounded-[25px] bg-slate-950/[.15]'
            >
                <View style = {styles.shadow} className = 'flex-row'>

                    <View className ='ml-2 w-[120px] h-[120px] items-center rounded-[20px]'>
                            <ProfileIcon width = '100%' height = '100%'/>
                    </View>

                    <View className ='ml-[5px] w-[170px] h-[120px] items-center rounded-[20px]'>
                        <Text className = 'pt-4 text-[15px]'>{userName}</Text>
                        
                        <View className = 'flex-row pt-[3px]'>
                            <Text className>{userAge} y/o - </Text>
                            <Text className = 'text-[#FFC700]'>{userHeading}</Text>
                        </View>

                        <TouchableOpacity className = 'pt-3'>
                            <Text className = 'pt-[10px] text-[#2DC8EA] text-[10px]'>tap here to view profile</Text>
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
