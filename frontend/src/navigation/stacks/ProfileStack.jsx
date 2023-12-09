import { createStackNavigator } from "@react-navigation/stack"
import ProfileScreen from "../../screens/ProfileStack/ProfileScreen";
import ProfileEditScreen from "../../screens/ProfileStack/ProfileEditScreen";


const Stack = createStackNavigator();

export default function ProfileStack(){
    return (
        <Stack.Navigator
            id="ProfileStack"
            initialRouteName="ProfileScreen"
        >
            <Stack.Screen component={ProfileScreen} name="ProfileScreen" options={{headerShown: false}}/>
            <Stack.Screen component={ProfileEditScreen} name="ProfileEditScreen" options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}