import MainStack from './src/navigation/MainStack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ProfileEditScreen from './src/screens/ProfileStack/ProfileEditScreen';
import {  useFonts, Nunito_300Light, Nunito_500Medium, Nunito_700Bold, Nunito_600SemiBold, Nunito_800ExtraBold, Nunito_900Black} from '@expo-google-fonts/nunito';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Root = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
    <NavigationContainer>
         {/*<Root.Navigator
           id="Root"
           initialRouteName="MainStack"
         >
           <Root.Screen name="MainStack" component={MainStack} options={{headerShown: false}} />
     </Root.Navigator>*/}
       <ProfileEditScreen ></ProfileEditScreen>
    </NavigationContainer>
    </GestureHandlerRootView>
   
  );
}