import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Menu = () => {
    return (
        <View style={{margin: 14}}>
            <Text style={Styles.menu}>Menu</Text>
            <View>
                <Text style={[Styles.option, {borderColor: 'white'}]}>Beranda</Text>
                <Text style={Styles.option}>Bookmark</Text>
                <Text style={Styles.option}>Account</Text>
                <Text style={Styles.option}>Sign Out</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create ({
    menu: {
        fontSize: 25,
        marginLeft: 8,
        fontWeight: 'bold',
        marginBottom: 30
    },
    option: {
        fontSize: 15,
        fontWeight: '800',
        borderTopWidth: 1,
        paddingVertical: 14
    }
})

export default Menu;