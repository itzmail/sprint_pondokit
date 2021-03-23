import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, Splashscreen} from '../containers/auth';
import {Home, Profil, AddProduct, AfterAdd} from '../containers/members';


const Stack = createStackNavigator()

export default class NavAuth extends React.Component{
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name='Splashscreen' component={Splashscreen}/>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='Register' component={Register}/>
                    <Stack.Screen name='AddProduct' component={AddProduct}/>
                    <Stack.Screen name='AfterAdd' component={AfterAdd}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}