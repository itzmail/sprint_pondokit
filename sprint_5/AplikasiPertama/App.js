import React from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import {styles} from './src/styles/_app';
import Headers, {SubHeaders} from './src/components/Headers';


class App extends React.Component {
  state = {
    email: '',
    pass: ''
  }
  render () {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Headers title='Selamat Datang' />
        <SubHeaders title='kembali' />

        <Text style={styles.title}>Hey.</Text>
        <Text style={styles.title}>Login Now.</Text>

        <View style={styles.ifYou}>
          <Text style={styles.if}>If you are new / </Text>
            <TouchableOpacity>
              <Text>Create New</Text>
            </TouchableOpacity>
        </View>
          <Image source={require('./src/assets/image/react.png')} style={styles.image}/>
          <Text>{this.state.email}</Text>
          <Text>{this.state.pass}</Text>
        <View style={styles.inputan}>
          <TextInput placeholder="Email" style={styles.kolomINput} onChangeText={(a) => this.setState({email: a})}/>
          <TextInput placeholder="Password" style={styles.kolomINput } onChangeText={(b) => this.setState({pass: b})} secureTextEntry />

          <View style={styles.forget}>
            <TouchableOpacity>
              <Text>Forget Password? /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>

        </View>

        <TouchableOpacity style={styles.login} onPress={()=> alert()}>
          <Text style={styles.titleLogin}>Login</Text>
        </TouchableOpacity>
      
      </View>
      </ScrollView>
    );
  }
}
export default App;