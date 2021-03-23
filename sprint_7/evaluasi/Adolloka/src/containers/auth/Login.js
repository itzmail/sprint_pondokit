import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class Login extends React.Component {
    constructor() {
        super()
        this.state={
            email: '',
            password: ''
        }
    }

    gotoAddProcut() {
        this.props.navigation.navigate('AddProduct')
    }

    gotoRegister() {
        this.props.navigation.navigate('Register')
    }

    Login = () => {
        const { email, password } = this.state
     
        //POST json 
        var dataToSend = {email: email, password: password};
        //making data to send on server
        var formBody = [];
        for (var key in dataToSend) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        //POST request 
        fetch('https://api-katalog-app.herokuapp.com/api/login ', {
          method: "POST",//Request Type 
          body: formBody,//post body 
          headers: {//Header Defination 
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
        })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          console.log(responseJson)
          const {token, error} = responseJson
          if(token){
            AsyncStorage.setItem('token', token). then(() => {
                this.gotoAddProcut()
            })
          }else {
            alert('Email atau Password Salah')
          }
        })
        //If response is not in json then in error
        .catch((error) => {
         alert('Email atau Password Salah')
        });
       }
    
    render() {
    return (
            <View style={styles.container}>
                <View style={{margin: 20}}>
                    <View>
                        <Text style={styles.Title}>Login to the App</Text>
                    </View>
                    <View>
                        <Text style={styles.titleInput}>Email : </Text>
                        <TextInput 
                        style={styles.inputText} 
                        placeholder='Masukkan email' 
                        onChangeText={email => this.setState({email})}
                        />
                    </View>
                    <View>
                        <Text style={styles.titleInput}>Password : </Text>
                        <TextInput 
                        style={styles.inputText} 
                        placeholder='Masukkan Password' 
                        onChangeText={password => this.setState({password})} 
                        secureTextEntry
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.Login()}>
                            <Text style={styles.loginButton}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.gotoRegister()}>
                            <Text style={styles.registerButton}>Belum punya akun? klik Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    }


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#18ec0e',
        height: '100%',
        width: '100%'
    },
    Title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20
    },
    titleInput: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    inputText: {
        fontSize: 15
    },
    loginButton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        backgroundColor: 'white',
        opacity: 0.8,
        borderRadius: 25,
        width: 150,
        alignSelf: 'center',
        margin: 15
    },
    registerButton: {
        alignSelf: 'center',
    }

})

export default Login;