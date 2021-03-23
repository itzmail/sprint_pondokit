import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../styles/_register';

const Register = () => {
    return (
        <View style={Styles.container}>
            <View style={{margin: 38}}>
            <View>
                <Text style={Styles.greeting}>Silahkan Register</Text>
            </View>
            <View>
                <Text style={Styles.textInput}>Nama Lengkap</Text>
                <TextInput style={Styles.input}/>
                <Text style={Styles.textInput}>Email</Text>
                <TextInput style={Styles.input}/>
                <Text style={Styles.textInput}>Password</Text>
                <TextInput style={Styles.input}/>
                <Text style={Styles.textInput}>Phone</Text>
                <TextInput style={Styles.input}/>
            </View>
            <View>
                <TouchableOpacity onPress={() => {alert()}}>
                    <Text style={Styles.buttonSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default Register
