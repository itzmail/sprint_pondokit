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
                 <Text style={{textAlign: 'center', fontSize: 28, fontWeight: 'bold', color: '#18ec0e'}}>Produk</Text>
                <View style={styles.mainBox}>
                    <Image style={styles.mainImage} source={require('../../assets/images/baju.jpeg')}/>
                    <View>
                        <Text>Nama Produk : Baju Navy Biru</Text>
                        <Text>Deskripsi : Baju ini terbuat dari bahan katun</Text>
                        <Text>Weight : 0.25 kg</Text>
                    </View>
                </View>
                <View style={styles.mainBox}>
                    <Image style={styles.mainImage} source={require('../../assets/images/celana.png')}/>
                    <View>
                        <Text>Nama Produk : Celana anak</Text>
                        <Text>Deskripsi : Celana terbuat dari bahan katun</Text>
                        <Text>Weight : 0.25 kg</Text>
                    </View>
                </View>
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
    mainBox: {
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10
    },
    mainImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    }
})

export default Home