/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
