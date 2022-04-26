import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import AllExpenses from '../screens/AllExpenses';

import RecentExpense from '../screens/RecentExpenses';
import React from 'react';
const Providers = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="All" component={AllExpenses} />
        <Stack.Screen name="Recent" component={RecentExpense} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Providers;
