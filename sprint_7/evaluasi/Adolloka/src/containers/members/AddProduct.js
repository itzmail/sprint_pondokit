import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Button,
    Platform,
    ActivityIndicator,
  } from 'react-native'
import ImagePicker from 'react-native-image-picker'

export class AddProduct extends Component {
    constructor() {
        super()
        this.state={
            photo: null,
            loading: false
        }
    }
    
    handleEditPhoto() {
        console.log('mengambil gambar..');
        const options = {
          noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({photo: response, edited: true});
            console.log(JSON.stringify(response.fileName));
          }
        });
      }

    render() {
        return (
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.upPage}>
                <Text style={styles.nameShop}>Adolloka</Text>
                <View style={styles.searchNav}>
                  <TextInput style={styles.searchInput} placeholder="search" />
                  <Text style={{fontSize: 20, color: 'white', marginHorizontal: 8}}>
                    |
                  </Text>
                  <TouchableOpacity
                    onPress={() => alert('Barang yang kamu cari belum ada')}>
                    <Image
                      style={styles.searchIcon}
                      source={require('../../assets/icons/search.png')}
                    />
                  </TouchableOpacity>
                </View>
                <ScrollView horizontal>
                  <TouchableOpacity
                    onPress={() => alert('Produk diskon segera datang')}>
                    <View style={styles.popBox}>
                      <View style={styles.textPop}>
                        <Text>Informasi Hari ini</Text>
                        <Text>50% diskon</Text>
                        <Text>produk fashion</Text>
                      </View>
                      <Image
                        style={styles.imagePop}
                        source={require('../../assets/icons/dress.png')}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => alert('Produk diskon segera datang')}>
                    <View style={styles.popBox}>
                      <View style={styles.textPop}>
                        <Text>Informasi Hari ini</Text>
                        <Text>50% diskon</Text>
                        <Text>produk olahraga</Text>
                      </View>
                      <Image
                        style={styles.imagePop}
                        source={require('../../assets/icons/treadmill.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
              <View>
                <Text style={styles.inputProductTitle}>Tambah Produk</Text>
                <View>
                    <Text>Nama barang: </Text>
                  <TextInput
                    style={styles.inputProductForm}
                    placeholder="Nama Barang"
                  />
                  <Text>Deskripsi: </Text>
                  <TextInput
                    style={styles.inputProductForm}
                    placeholder="Description"
                  />
                  <Text>Berat Benda: </Text>
                  <TextInput
                    style={styles.inputProductForm}
                    placeholder="Berat benda"
                    keyboardType="number-pad"
                  />
                </View>
                {this.state.photo == null ? (
                  <Button
                    title="Tambah Gambar"
                    onPress={() => {
                      this.handleEditPhoto();
                    }}
                  />
                ) : (
                  <Image
                    source={{uri: this.state.photo.uri}}
                    style={{width: 100, height: 100}}
                  />
                )}
    
                {this.state.loading ? (
                  <ActivityIndicator color="lime" size="small" />
                ) : (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('AfterAdd')}>
                    <Text style={styles.inputProductButton}>Kirim Produk</Text>
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </View>
        );
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
      borderBottomStartRadius: 20,
    },
    searchNav: {
      flexDirection: 'row',
      marginVertical: 20,
    },
    searchInput: {
      width: 300,
      borderRadius: 25,
      height: 30,
      fontSize: 15,
      paddingVertical: 5,
      paddingLeft: 10,
      backgroundColor: 'rgba(255,255,255,10) ',
    },
    searchIcon: {
      height: 18,
      width: 18,
      top: 7,
      justifyContent: 'flex-end',
      tintColor: 'white',
    },
    //PopBox
    popBox: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      width: 200,
      marginHorizontal: 10,
    },
    textPop: {},
    imagePop: {
      width: 80,
      height: 80,
    },
  
    //formInputProduct
    inputProductTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#18ec0e',
      textAlign: 'center',
      marginVertical: 30,
    },
    inputProductForm: {
      borderWidth: 1,
      borderColor: '#18ec0e',
      borderRadius: 25,
      padding: 8,
      marginVertical: 5,
      height: 35,
      fontSize: 18,
      marginHorizontal: 15,
      color: 'black'
    },
    inputProductButton: {
      borderRadius: 25,
      backgroundColor: '#18ec0e',
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
      width: 180,
      alignSelf: 'center',
    },
    image: {
      marginVertical: 24,
      alignItems: 'center',
    },
  });

export default AddProduct
