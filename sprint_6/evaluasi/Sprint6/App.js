import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router'
import Login from './src/screen/login';
import Register from './src/screen/register';
import Dashboard from './src/screen/dashboard';
import Profile from './src/screen/profile';
import Main from './src/router';
import Splashscreen from './src/screen/splashScreen';

export class App extends Component {
  render() {
    return (
    <NavigationContainer>
      <Splashscreen />
      <Main />
    </NavigationContainer>
    )
  }
}

export default App
