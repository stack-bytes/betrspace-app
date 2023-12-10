import { View, Image, Text } from "react-native"
import UserProfilePicComponent from '../../components/UserProfilePicComponent';
import { GenericButton } from "../../components/Buttons/GenericButton";
import Separator from "../../components/Separator";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
    const navigation = useNavigation();
    return(<>
        <View className='flex justify-start items-center w-full h-full p-5'>
            <UserProfilePicComponent/>
            <Text style={{fontFamily:"Nunito_600SemiBold"}} className="mt-7 text-4xl">Mina</Text>
            <Text style={{fontFamily:"Nunito_500Medium"}} className="text-2xl">21 y/o - <Text className="text-warning" style={{fontFamily:"Nunito_900Black"}}>helper</Text></Text>
            <View className="badgeuri dizabilitati"></View>
            <View className="badge de achievement"></View>
            <Separator ></Separator>
            <GenericButton 
                buttonText={"Edit Profile"} backgroundColor={"#FAFAFA"} borderColor={"#FAFAFA"} textColor={"#1A1A1A"}
                onPress={() => navigation.navigate('ProfileEditScreen')}
            />
            <GenericButton 
                buttonText={"Logout"} backgroundColor={"#A1679E"} borderColor={"#A1679E"} textColor={"#FAFAFA"}
            />
        </View>
    </>)
}


export default ProfileScreen