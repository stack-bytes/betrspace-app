import React from "react";
import { View, Image, Text } from "react-native";
import { GenericButton } from "../../components/Buttons/GenericButton";
import { GenericInput } from "../../components/Buttons/GenericInput"
import appLogo from './../../../assets/icons/appLogo.png';

const LoginScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center', padding: 20, }}>
            <Image source={appLogo} style={{ width: 250, height: 250 , marginTop: 60 }} />
            <Text className="text-6xl font-bold">Betr Space</Text>
            <Text className="text-2xl font-medium mt-16">Login to your account</Text>
            <GenericInput placeholder={"Email"}></GenericInput>
            <GenericInput placeholder={"Password"}></GenericInput>
        </View>
    );
};

export default LoginScreen;
