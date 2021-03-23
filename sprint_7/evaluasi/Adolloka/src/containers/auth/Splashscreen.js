import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react'
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'

class Splashscreen extends Component {  
    componentDidMount() {
        AsyncStorage.getItem('token')
        .then(token => console.log(token))
    }
    
    render() {
        setTimeout(() => {
            this.props.navigation.replace('Home')
        }, 3000);
        return(
            <View style={styles.container}>
                
                    <Text style={styles.nameShop}>Adolloka</Text>
                    <Text style={styles.slogan}>Pay Easy People Happy</Text>
                
                <View>
                    <ActivityIndicator size='large' color='white'/>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameShop: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    slogan: {
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
        marginBottom: 15
    }
})

export default Splashscreen
