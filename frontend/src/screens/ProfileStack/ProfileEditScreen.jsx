import { ScrollView } from "react-native-gesture-handler"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import GenericInput from "../../components/Buttons/GenericInput"
import {GenericButton} from "../../components/Buttons/GenericButton"
import Separator from "../../components/Separator"

import { useNavigation } from "@react-navigation/native"

import  ImageSvg  from "../../../assets/icons/Image.svg"
import ArrowIcon from "../../../assets/icons/arrow-icon.svg"

const ProfileEditScreen = () => {
    const navigation = useNavigation();

    return (
        <>
        <View className='absolute top-16 right-4 h-12 w-12'>
            <TouchableOpacity 
                className = 'w-full h-full z-20'
                onPress={() => console.log('test')}
            >
                <ArrowIcon />
            </TouchableOpacity>
        </View>
        <ScrollView className='w-full h-full p-5' contentContainerStyle={styles.flexMidScroll} >

            <View className="w-48 h-48 bg-grey mt-10 rounded-full flex flex-col items-center justify-center mb-1">
                <TouchableOpacity
                className="w-44 h-44 rounded-full bg-transtext flex items-center justify-center"
                src={'https://thispersondoesnotexist.com/'}><ImageSvg></ImageSvg></TouchableOpacity>
            </View>

            <GenericInput placeholder={"Full Name"}></GenericInput>
            <GenericInput placeholder={"Email"}></GenericInput>
            <GenericInput placeholder={"Password"} password={true}></GenericInput>
            <View className="Badges"></View>

            <Separator></Separator>
            <View className="-mt-5"></View>
            <GenericButton width={360} buttonText={"Save Profile"} backgroundColor={"#2DC8EA"} borderColor={"#2DC8EA"} textColor={"#FAFAFA"}></GenericButton>
            <GenericButton width={360} buttonText={"Logout"} backgroundColor={"#A1679E"} borderColor={"#A1679E"} textColor={"#FAFAFA"}></GenericButton>
            <GenericButton width={360} buttonText={"Delete Account"} backgroundColor={"#A1679E"} borderColor={"#A1679E"} textColor={"#FAFAFA"}></GenericButton>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    flexMidScroll:{
        flex: 1,
        alignItems: "center",
        justifyContent: "start"
    }
})

export default ProfileEditScreen