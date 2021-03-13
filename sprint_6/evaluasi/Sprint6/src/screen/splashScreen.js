import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

function Splash () {
    return (
        <View style={{flex: 1, backgroundColor: '#1689b4', justifyContent: 'center'}}>
            <Text style={{fontSize: 30, textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Woke App</Text>
            <ActivityIndicator color='white' size='large' />
        </View>
    )
}

class Splashscreen extends React.Component {
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
