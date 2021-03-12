import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/router/main'
import Splashscreen from './src/screen/splashscreen';
import { View } from 'react-native';
import Dashboard from './src/screen/dashboard';



function App () {
  return(
    <NavigationContainer>
      <Splashscreen />
      <Main />
    </NavigationContainer>
  )
}

export default App;
