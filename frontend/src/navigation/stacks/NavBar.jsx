import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "./HomeStack";

import HelpStack from "./HelpStack";

const Tab = createBottomTabNavigator();

export const NavBar = () => {
    return (
        <Tab.Navigator
            id="NavBar"
            initialRouteName="HelpStack"
            screenOptions={{
                showLabel: false,
                tabBarStyle: {
                    zIndex: 20,
                    position: 'absolute',
                    bottom: 25,
                    backgroundColor: 'transparent',
                }
            }}
        >
            <Tab.Screen 
                component={HomeStack} 
                name="HomeStack" 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false
                }}
            />

            <Tab.Screen 
                component={HelpStack} 
                name="HelpStack" 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}