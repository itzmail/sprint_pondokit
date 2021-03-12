import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screen/dashboard';
import Menu from '../screen/Menu';
import Splashscreen from '../screen/splashscreen'
import { Title } from 'react-native-paper';

const bottom = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomNavigation() {
  return( 
      <bottom.Navigator>
          <bottom.Screen name="Dashboard" component={Dashboard} />
          <bottom.Screen name="Menu" component={Menu} />
      </bottom.Navigator>
    
  )
}

function Main() {
  return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Dashboard" component={BottomNavigation}  />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
  );
}

export default Main;
