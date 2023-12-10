import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {  useFonts, Nunito_300Light, Nunito_500Medium, Nunito_600SemiBold, Nunito_800ExtraBold, Nunito_900Black} from '@expo-google-fonts/nunito';
import MainStack from './src/navigation/MainStack'

import { UserDataProvider } from './src/contexts/UserDataContext';
const Root = createStackNavigator();

import io from 'socket.io-client';
import { useEffect } from 'react';

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
    <UserDataProvider>
      <NavigationContainer>
        <Root.Navigator
          id="Root"
          initialRouteName="MainStack"
        >
          <Root.Screen name="MainStack" component={MainStack} options={{headerShown: false}} />
        </Root.Navigator>
      </NavigationContainer>
    </UserDataProvider>
  );
}