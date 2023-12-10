import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {  useFonts, Nunito_300Light, Nunito_500Medium, Nunito_700Bold, Nunito_600SemiBold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito';
import MainStack from './src/navigation/MainStack'

import { UserDataProvider } from './src/contexts/UserDataContext';
const Root = createStackNavigator();

import io from 'socket.io-client';
import { useEffect } from 'react';
import AuthStack from './src/navigation/stacks/AuthStack';

export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_800ExtraBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserDataProvider>
      <NavigationContainer>
        <Root.Navigator
          id="Root"
          initialRouteName="AuthStack"
        >
          <Root.Screen name="AuthStack" component={AuthStack} options={{headerShown: false}} />
        </Root.Navigator>
      </NavigationContainer>
    </UserDataProvider>
  );
}