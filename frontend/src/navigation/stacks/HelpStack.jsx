import { createStackNavigator } from "@react-navigation/stack"
import RequestScreen from "../../screens/HelpStack/RequestScreen"
import ArrivingHelpScreen from "../../screens/HelpStack/ArrivingHelpScreen"
const Stack = createStackNavigator();

export default function HelpStack(){
    return (
        <Stack.Navigator
            id="HelpStack"
        >
            <Stack.Screen component={RequestScreen} name="RequestScreen" options={{headerShown: false}}/>
            <Stack.Screen component={ArrivingHelpScreen} name="ArrivingHelpScreen" options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}