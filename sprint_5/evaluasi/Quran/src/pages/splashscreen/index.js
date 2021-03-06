import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import styles from '../../styles/_splashscreen'

class Splashscreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Quran App</Text>
                    <View style={styles.subTitle}>
                        <Text style={{alignSelf: 'center'}}>Learn Quran &</Text>
                        <Text style={{alignSelf: 'center'}}>Recite Once Everyday</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', borderWidth: 1, borderRadius: 20, backgroundColor: '#b60cd4'}}>
                    <Image source={require('../../assets/icons/quranOpening.png')} style={{height: 170, width: 170, marginTop: 70, marginBottom: 50}}/>
                    <Text style={{alignItems: 'center',borderRadius: 10, borderWidth: 1, position: 'absolute', top: 275, backgroundColor: "yellow", fontSize: 20}}>Get Started</Text>
                </View>
            </View>
        )
    }
}

export default Splashscreen;
