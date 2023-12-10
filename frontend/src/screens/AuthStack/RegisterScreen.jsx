import React from "react";
import { View, Image, Text, Button, TouchableOpacity, Touchable } from "react-native";
import { GenericButton } from "../../components/Buttons/GenericButton";
import { GenericInput } from "../../components/Buttons/GenericInput"
import appLogo from './../../../assets/icons/appLogo.png';

import apple from './../../../assets/icons/apple.svg';
import google from './../../../assets/icons/google.svg';
import x from './../../../assets/icons/x.svg';
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center', padding: 0, }}>
            <Image source={appLogo} style={{ width: 250, height: 250 , marginTop: 60 }} />
            <Text className="text-6xl font-bold">Betr Space</Text>
            <Text className="text-lg font-medium mt-8">Create your account</Text>
            <GenericInput placeholder={"Email"}></GenericInput>
            <GenericInput placeholder={"Password"}></GenericInput>
            <GenericInput placeholder={"Re-enter Password"}></GenericInput>
            <GenericButton 
                buttonText={"Register"} backgroundColor={"#FAFAFA"} borderColor={"#FAFAFA"} textColor={"#1A1A1A"}
                width={200}
                onPress={()=>navigation.navigate("MainStack")}
            />
            <View className = 'flex-row items-center justify-center mt-5'>
            
            <View className="mr-3 ml-3 flex flex-row items-center justify-center">
                <GenericButton 
                 SvgIcon={google}
                backgroundColor={"#FAFAFA"} borderColor={"#FAFAFA"} textColor={"#1A1A1A"}
                width={80} height={80}
            /></View>
            <View className="mr-3 ml-3 flex flex-row items-center justify-center">
                <GenericButton 
                 SvgIcon={apple}
                backgroundColor={"#FAFAFA"} borderColor={"#FAFAFA"} textColor={"#1A1A1A"}
                width={80} height={80}
            /></View>
            <View className="mr-3 ml-3 flex flex-row items-center justify-center">
                <GenericButton 
                 SvgIcon={x}
                backgroundColor={"#FAFAFA"} borderColor={"#FAFAFA"} textColor={"#1A1A1A"}
                width={80} height={80}
            /></View>
            </View>
        </View>
    );
};

export default RegisterScreen;
