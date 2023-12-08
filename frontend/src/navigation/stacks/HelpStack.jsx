import { createStackNavigator } from "@react-navigation/stack"
import RequestScreen from "../../screens/HelpStack/RequestScreen"
const Stack = createStackNavigator();

export default function HelpStack(){
    return (
        <Stack.Navigator
            id="HelpStack"
        >
        <Stack.Screen component={RequestScreen} name="RequestScreen" options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}