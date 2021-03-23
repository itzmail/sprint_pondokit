import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Blank = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Blank Page</Text>
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text : {
        fontSize: 50,
        fontWeight: 'bold',
        textShadowOffset: {
            width: 30,
            height: 30
        },
        textShadowColor: '#1689b4',
        color: 'yellow'
    }
})

export default Blank;