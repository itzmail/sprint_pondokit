import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'

export class Register extends Component {
    constructor() {
        super()
        this.state={
            name: '',
            email: '',
            password: '',
            ulangiPassword: ''
        }
    }
    
    gotoLogin() {
        this.props.navigation.goBack()
    }

    Register() {
        const {name, email, password, ulangiPassword} = this.state;

        //POST json
        var dataToSend = {
        name: name,
        email: email,
        password: password,
        password_confirmation: ulangiPassword,
        };

        //making data to send on server
        var formBody = [];
        for (var key in dataToSend) {
        var encodedKey = encodeURIComponent (key);
        var encodedValue = encodeURIComponent (dataToSend[key]);
        formBody.push (encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join ('&');

        //POST request
        fetch ('https://api-katalog-app.herokuapp.com/api/register', {
        method: 'POST', //Request Type
        body: formBody, //post body
        headers: {
            //Header Defination
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        })
        .then (response => response.json ())

        //If response is in json then in success
        .then (responseJson => {
            console.log (responseJson);
            const {token} = responseJson;
            if (token) {
            alert ('register sukses');
            this.props.navigation.goBack ();
            }else{
            alert ('Pastikan Form Sudah Terisi dengan benar');
            }
        })

        //If response is not in json then in error
        .catch (error => {
            alert ('Pastikan Form Sudah Terisi dengan benar');
        });
};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.pageName}>Register</Text>
                <View>
                    <TextInput style={styles.inputText} onChangeText={name => this.setState({name})} placeholder='Name' />
                    <TextInput style={styles.inputText} onChangeText={email => this.setState({email})} placeholder='Email' />
                    <TextInput style={styles.inputText} onChangeText={password => this.setState({password})} placeholder='Password'  />
                    <TextInput style={styles.inputText} onChangeText={ulangiPassword => this.setState({ulangiPassword})} placeholder='Confirmation Password'  />
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.Register()}>
                        <Text style={styles.registerButton}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.gotoLogin()}>
                        <Text>Sudah punya akun? Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#18ec0e',
        padding: 20
    },
    pageName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30
    },
    inputText: {
        color: 'black',
        borderRadius: 15,
        fontSize: 13,
        backgroundColor: 'white',
        margin: 5,
        textDecorationLine: 'underline'
    },
    registerButton: {
        backgroundColor: 'white',
        opacity: 0.8,
        textAlign: 'center',
        borderRadius: 30,
        marginVertical: 25,
        fontSize: 25,
        width: 180
    },

})

export default Register