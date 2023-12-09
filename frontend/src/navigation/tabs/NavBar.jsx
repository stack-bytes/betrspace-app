import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "../stacks/HomeStack";
import ProfileStack from "../stacks/ProfileStack";

import HelpStack from "../stacks/HelpStack";
import UserIcon from '../../../assets/icons/user-icon.svg';
import AlertIcon from '../../../assets/icons/alert-icon.svg';
import MapIcon from '../../../assets/icons/map-icon.svg';

import { Alert, View } from "react-native";

const Tab = createBottomTabNavigator();

export const NavBar = () => {
    return (
        <Tab.Navigator
            id="NavBar"
            initialRouteName="HelpStack"
            screenOptions={{
                showLabel: false,
                headerTransparent: true,
                tabBarStyle: {
                    zIndex: 20,
                    position: 'absolute',
                    height: 100,
                    bottom: 30,
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderRadius: 20,
                    display: 'flex-row',
                    paddingTop: 25,
                    marginHorizontal: 50,
                    justifyContent: 'space-between'
                }
            }}
        >
            <Tab.Screen 
                component={ProfileStack} 
                name="ProfileStack" 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View className='rounded-lg bg-[#fff] w-16 h-16 justify-center items-center shadow-2xl'>
                            <UserIcon width='150%' fill={focused ? '#A1679E' : 'black'}/>
                        </View>
                    )
                }}
                
            />

            <Tab.Screen 
                component={HelpStack} 
                name="HelpStack" 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View className='rounded-lg bg-[#fff] w-16 h-16 justify-center items-center shadow-2xl'>
                            <AlertIcon width='150%' fill={focused ? '#A1679E' : 'black'}/>
                        </View>
                    )
                }}
                
            />

            <Tab.Screen 
                component={HomeStack} 
                name="MapStack" 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View className='rounded-lg bg-[#fff] w-16 h-16 justify-center items-center shadow-2xl'>
                            <MapIcon width='150%' fill={focused ? '#A1679E' : 'black'}/>
                        </View>
                    )
                }}
                
            />

        </Tab.Navigator>
    )
}