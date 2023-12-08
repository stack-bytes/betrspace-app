import { createStackNavigator } from "@react-navigation/stack"
import MapScreen from "../../screens/HomeStack/MapScreen"

const Stack = createStackNavigator();

export default function HomeStack(){
    return (
        <Stack.Navigator
            id="HomeStack"
        >
            <Stack.Screen component={MapScreen} name="MapScreen" options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}