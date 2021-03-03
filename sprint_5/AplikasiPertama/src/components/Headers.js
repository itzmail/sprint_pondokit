import React , {Component} from 'react';
import {View, Text} from 'react-native';

//Pemanggilan props menggunakan Function Component
const Headers = ({title}) => {
    return (
        <View style={{
            height: 50,
            width: '100%',
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 10,
            alignItems: 'center'
        }} >
            <Text>{title}</Text>
        </View>
    );
}

//Pemanggilan menggunakan Class Componenet
export class SubHeaders extends React.Component {
    render(){
        return(
            <View style={{
                height: 50,
                width: '100%',
                backgroundColor: 'blue',
                justifyContent: 'center',
                borderRadius: 10,
                alignItems: 'center'
            }} >
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

export default Headers;