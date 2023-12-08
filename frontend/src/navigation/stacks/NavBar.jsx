import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export const NavBar = () => {
    return (
        <Tab.Navigator
            id="NavBar"
        >
            <Tab.Screen component={HomeStack} name="HomeStack" options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}