import React, { Component } from 'react'
import { Text, View, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
             <View style={styles.upPage}>
                <Text style={styles.nameShop}>Adolloka</Text>
                <View style={styles.searchNav}>
                    <TextInput style={styles.searchInput} placeholder="search"/>
                    <Text style={{fontSize: 20, color: 'white'}}>|</Text>
                    <TouchableOpacity onPress={()=>alert('Barang yang kamu cari belum ada')}>
                        <Image style={styles.searchIcon} source={require('../../assets/icons/search.png')}/>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                <TouchableOpacity onPress={() => alert('Produk diskon segera datang')}>
                <View style={styles.popBox}>
                    <View style={styles.textPop}>
                        <Text>Informasi Hari ini</Text>
                        <Text>50% diskon</Text>
                        <Text>produk fashion</Text>
                    </View>
                    <Image style={styles.imagePop} source={require('../../assets/icons/dress.png')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Produk diskon segera datang')}>
                <View style={styles.popBox}>
                    <View style={styles.textPop}>
                        <Text>Informasi Hari ini</Text>
                        <Text>50% diskon</Text>
                        <Text>produk olahraga</Text>
                    </View>
                    <Image style={styles.imagePop} source={require('../../assets/icons/treadmill.png')}/>
                </View>
                </TouchableOpacity>
                </ScrollView>
             </View>

             <View style={{padding: 15}}>
                 <Text style={styles.mainTitle}>Mau tambah Produk?</Text>
                 <Image style={styles.mainImage} source={require('../../assets/icons/delivery-courier.png')} />
                 <Text>Kamu bisa menambahkan produk mu, dengan cara mengklik tombol di bawah ini</Text>
                 
                 <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Image style={styles.mainAdd} source={require('../../assets/icons/plus.png')}/>
                 </TouchableOpacity>
             </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // Header 
    container: {
        width: '100%',
        height: '100%',
    },
    nameShop: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    upPage: {
        backgroundColor: '#18ec0e',
        padding: 15,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },
    searchNav: {
        flexDirection: 'row',
        marginVertical: 20
    },
    searchInput: {
        width: 300,
        borderRadius: 25,
        height: 30,
        fontSize: 15,
        paddingVertical: 5,
        paddingLeft: 10,
        backgroundColor: 'rgba(255,255,255,10) ',
        color: 'black'
    },
    searchIcon: {
        height: 18,
        width: 18,
        top: 7,
        justifyContent: 'flex-end',
        tintColor: 'white'
    },
    //PopBox
    popBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        width: 200,
        marginHorizontal: 10
    },
    textPop: {
        
    },
    imagePop: {
        width: 80,
        height: 80,
    },

    //main topic
    mainTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    mainImage: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        marginVertical: 30
    },
    mainAdd: {
        width: 50,
        height: 50,
        tintColor: '#18ec0e',
        margin: 15,
        alignSelf: 'center'
    }
})

export default Home