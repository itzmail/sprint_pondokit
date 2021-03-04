import React, {Componenet} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from '../../styles/_splashscreen';

export default class Splashscreen extends React.Component {
    constructor() {
        super()
        this.state= {
            halo: 'Selamat Datang di My App',
        };
    }

    componentDidMount = () => {
        console.log('component did mount')

        setTimeout( () => {
            this.setState({
                halo: 'Bagaimana Kabarmu?'
            })
        }, 5000);
    }
    
    render() {
        return (
        <View style={{width: '100%', height: '70%', justifyContent:'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color='#20f415'/>
                <Text>{this.state.halo}</Text>
        </View>
        )
    }
}