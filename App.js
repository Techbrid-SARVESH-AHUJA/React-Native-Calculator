import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CalculatorScreen from './screens/Main_Calculator'
import ChangeBackgroundScreen from './screens/Change_BG'
import HistoryScreen from './screens/History'
import MainScreen from './screens/Icon'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false, presentation: 'transparentModal'}} initialRouteName="Main_Screen">

        <Stack.Screen name="Main_Screen" component={MainScreen} />
        
        <Stack.Screen name="Change_Background_Screen" component={ChangeBackgroundScreen} />
        
        <Stack.Screen name="History_Screen" component={HistoryScreen} />
        
        <Stack.Screen name="Calculator_Screen" component={CalculatorScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;