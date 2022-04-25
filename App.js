import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CalculatorScreen from './screens/Main_Calculator'
import ChangeBackgroundScreen from './screens/Change_BG'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Calculator_Screen"
          component={CalculatorScreen}
          options={{ title: 'Main Calculator Screen' }}
        />
        <Stack.Screen name="Change_Background_Screen" component={ChangeBackgroundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;