import React from "react";
import { View, Image, Text, Button, TouchableOpacity, Touchable } from "react-native";
import { GenericButton } from "../../components/Buttons/GenericButton";
import { GenericInput } from "../../components/Buttons/GenericInput"
import appLogo from './../../../assets/icons/appLogo.png';

import apple from './../../../assets/icons/apple.svg';
import google from './../../../assets/icons/google.svg';
import x from './../../../assets/icons/x.svg';

const LoginScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center', padding: 0, }}>
            <Image source={appLogo} style={{ width: 250, height: 250 , marginTop: 60 }} />
            <Text className="text-6xl font-bold">Betr Space</Text>
            <Text className="text-lg font-medium mt-8">Login to your account</Text>
            <GenericInput placeholder={"Email"}></GenericInput>
            <GenericInput placeholder={"Password"}></GenericInput>
            <GenericButton 
                buttonText={"Login"} backgroundColor={"#FAFAFA"} borderColor={"#FAFAFA"} textColor={"#1A1A1A"}
                width={200}
            />
            <Text className="text-lg font-medium mt-8">- or login with -</Text>
            <View className = 'flex-row items-center justify-center '>
            
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

            <Text className="text-lg font-medium mt-8 ">Don't have an account? <TouchableOpacity 
            
            ><Text className="font-bold text-primary text-lg">Sign up</Text></TouchableOpacity></Text>
        </View>
    );
};

export default LoginScreen;
