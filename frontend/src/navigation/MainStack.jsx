import { createStackNavigator } from "@react-navigation/stack"
import { NavBar } from "./stacks/NavBar";

const Main = createStackNavigator();

export default function MainStack(){
    return (
        <Main.Navigator
            id="MainStack"
        >
            <Main.Screen component={NavBar} name="NavBar" options={{headerShown: false}}/>
        </Main.Navigator>
    )
}