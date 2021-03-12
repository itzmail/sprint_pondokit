import React, { Component, useEffect } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import Styles from '../styles/_splashscreen'
import {NavigationContainer, useNavigation} from '@react-navigation/native'

function Splash () { 
  return (
        <View style={{backgroundColor: '#808DF9'}}>
          <Image source={require('../assets/icon/mosque.png')} style={Styles.image}/>
          <ActivityIndicator style={Styles.loading} size='large' color="white" />
          <View style={Styles.greeting}>
              <Text style={{color: 'white'}}>As-salamu alaykum</Text>
              <Text style={{color: 'white'}}>Please be upon you</Text>
          </View>
        </View>
         )
        }

class Splashscreen extends Component {
  constructor(){
    super()
    this.state={
      gone : true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({gone: false});
    }, 3000)
  }

  render() {
    return(
      <View>
        {this.state.gone && <Splash />}
      </View>
    )
  }
}
    

export default Splashscreen;