import React from 'react';
import {Text, View, Image, TextInput, ScrollView, Button, Alert, TouchableOpacity} from 'react-native';
import { styles } from './src/styles/_app'

const App = () => {
  return(
    <View>
      <ScrollView>
      <View style={styles.title}>
        <Text style={styles.subTitle}>Hey,</Text>
        <Text style={styles.subTitle}>Login Now</Text>
      </View>
    
      <Image source={require('./src/assets/image/react.png')} 
      style={styles.img} />

      <View style={styles.newMember}>
        <Text style={{color: 'rgba(0,0,0,0.3)'}}>Are you new? </Text>
        <Text style={{color: 'blue', fontWeight: '900'}}>Create account</Text>
      </View>

      <View>
        <Text style={styles.titleForm}>Email</Text>
        <TextInput 
          style={styles.inputForm}
          placeholder='Masukkan email anda'
          onChangeText={(a) => console.log(a)}
        />

        <Text style={styles.titleForm}>Password</Text>
        <TextInput 
          style={styles.inputForm}
          placeholder='Masukkan password anda'
          onChangeText={(a) => console.log(a)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.reset}>
          <Text>Reset / </Text>
          <Text>change password</Text>
      </View>

      <TouchableOpacity style={styles.login}>
        <Text>Login</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default App;