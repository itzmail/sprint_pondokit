import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../styles/_login'

const Login = ({navigation}) => {
    return (
        <View style={Styles.container}>
            <View style={{margin: 38}}>
            <View>
                <Text style={Styles.greeting}>Selamat Datang</Text>
            </View>
            <View>
                <Text style={Styles.textInput}>Email</Text>
                <TextInput style={Styles.input}/>
                <Text style={Styles.textInput}>Password</Text>
                <TextInput style={Styles.input}/>
            </View>
            <View>
                <TouchableOpacity onPress={() => {navigation.navigate("Dashboard")}}>
                    <Text style={Styles.buttonSignIn}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate("Register")}}>
                    <Text style={Styles.buttonSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default Login
