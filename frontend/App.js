import MainStack from './src/navigation/MainStack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Root = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator
        id="Root"
        initialRouteName="MainStack"
      >
        <Root.Screen name="MainStack" component={MainStack} options={{headerShown: false}} />
      </Root.Navigator>
    </NavigationContainer>
  );
}