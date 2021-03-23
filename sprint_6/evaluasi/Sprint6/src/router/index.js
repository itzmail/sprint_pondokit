import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screen/dashboard';
import Login from '../screen/login';
import Profile from '../screen/profile';
import Register from '../screen/register';
import Blank from '../screen/Blank';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();


const Bottom = () => {
    return(
    <BottomTab.Navigator>
        <BottomTab.Screen name="Dashboard" component={Dashboard} />
        <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
    )
}

const Main = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Blank" component={Blank} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Dashboard" component={Bottom} />
        </Stack.Navigator>
    )
}

export default Main;
