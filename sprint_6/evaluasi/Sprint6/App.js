import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
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
