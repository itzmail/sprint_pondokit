import React from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import Dashboard from './src/pages/Dashboard';
import Splashscreen from './src/pages/Splashscreen'

  class App extends React.Component{
    constructor(){
      super()
      this.state = {
        gone: true,
      }
    }
    
    componentDidMount(){
      console.log('component did mount')
      setTimeout(() => {
        this.setState({gone: false});
      }, 8000);
    }

    render(){
      return(
      <View>
        {this.state.gone && <Splashscreen />}
        <Dashboard />
      </View>
      )
    }
  }
export default App;