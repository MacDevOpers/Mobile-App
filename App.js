import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import MapPage from './screens/MapPage';
import TimerPage from './screens/TimerPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Map" component={MapPage} />
        <Stack.Screen name="Timer" component={TimerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
