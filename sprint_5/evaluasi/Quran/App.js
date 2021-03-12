import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Dashboard from './src/pages/dashboard'
import Splashscreen from './src/pages/splashscreen'

export default class App extends Component {
  constructor() {
    super()
    this.state={
      gone: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({gone: false});
    }, 5000);
  }

  
  render() {
    return (
      <View>
        {this.state.gone && <Splashscreen />}
        <Dashboard />
      </View>
    )
  }
}
