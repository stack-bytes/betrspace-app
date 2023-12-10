import { createStackNavigator } from "@react-navigation/stack"

import RegisterScreen from "../../screens/AuthStack/RegisterScreen";
import LoginScreen from "../../screens/AuthStack/LoginScreen";
import MainStack from "../MainStack";


const Stack = createStackNavigator();

export default function AuthStack(){
    return (
        <Stack.Navigator
            id="AuthStack"
            initialRouteName="LoginScreen"
        >
            <Stack.Screen component={RegisterScreen} name="RegisterScreen" options={{headerShown: false}}/>
            <Stack.Screen component={LoginScreen} name="LoginScreen" options={{headerShown: false}}/>
            <Stack.Screen component={MainStack} name="MainStack" options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}