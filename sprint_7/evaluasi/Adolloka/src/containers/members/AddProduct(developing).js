import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
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
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
export class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      weight: 0,
      token: '',
      photo: null,
      image: '',
      edited: false,
      loading: false,
      id: '',
    };
  }
  // inputPhoto() {
  //     const options = {
  //         noData: true,
  //       };
  //       launchImageLibrary(options, (response) => {
  //         if (response.uri) {
  //           console.log(response);
  //           this.setState({image})
  //         }
  //       });
  // }

  createFormData(photo, body) {
    const data = new FormData();
    data.append('image', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });
    Object.keys(body).forEach(key => {
      data.append(key => {
        data.append(key, body[key]);
      });
    });
    return data;
  }

  updateUser() {
    if (this.state.edited != false) {
      const {name, description, weight, photo} = this.state;
      const kirimData = {
        name: name,
        description: description,
        weight: weight,
        photo: photo,
      };
      this.setState({loading: true});
      console.log('Memperbaharui user...');
      fetch(
        `https://api-katalog-app.herokuapp.com/api/products/${this.state.id}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
          body: this.createFormData(photo, kirimData),
        },
      ).then(response => response.json());
      then(responseJSON => {
        if (responseJSON.status == 'success') {
          this.setState({
            loading: false,
            edited: false,
          });
          this.getUser();
          ToastAndroid.show('Profil telah Anda sunting', ToastAndroid.SHORT);
        } else {
          this.setState({loading: false});
          this.alert();
        }
      }).catch(err => this.error(err));
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

  addProduct() {
    if (this.state.name != '' && this.state.edited != false) {
      const {name, description, weight, photo} = this.state;
      const kirimData = {
        name: name,
        description: description,
        weight: weight,
      };
      this.setState({loading: true});
      console.log('menambah produk..');
      fetch(`https://api-katalog-app.herokuapp.com/api/products`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
        body: this.createFormData(photo, kirimData),
      })
        .then(response => response.json())
        .then(responseJSON => {
          console.log(responseJSON);
          if (responseJSON.status == 'success') {
            console.log('sukses');
            this.setState({
              loading: false,
              edited: false,
            });
            //   this.getUser();
            //   ToastAndroid.show(
            //     'Profil telah Anda sunting',
            //     ToastAndroid.SHORT,
            //   );
          } else {
            this.setState({loading: false});
            console.log('failed');
          }
        })
        .catch(err => this.error(err));
    } else {
      console.log('isi yang benar');
    }
  }

  //   addProduct() {
  //       console.log('menambah produk..');
  //       console.log(this.state.name);
  //     const {name, description, weight, photo} = this.state;
  //     // var formdata = new FormData();
  //     //     formdata.append("name", "Sample Product");
  //     //     formdata.append("description", "lorem ipsum dolor sit amet demet");
  //     //     formdata.append("weight", "9");
  //     const body = {
  //       name: name,
  //       description: description,
  //       weight: weight,
  //     };
  //     var requestOptions = {
  //       method: 'POST',
  //       body: this.createFormData(photo, body),
  //       redirect: 'follow',
  //       headers: {
  //         Authorization: `Bearer ${this.state.token}`,
  //         Accept : 'application/json',
  //         // 'Content-Type': 'application/json',
  //       },
  //     };

  //     fetch('https://api-katalog-app.herokuapp.com/api/products', requestOptions)
  //       .then(response => response.json())
  //       .then(result => console.log(result))
  //       .catch(error => console.log('error', error));
  //   }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then(token => {
        console.log(token);
        this.setState({token: token});
      })
      .catch(err => console.log(err));
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
              <TextInput
                style={styles.inputProductForm}
                placeholder="Nama Barang"
                onChangeText={(input) => this.setState({name: input})}
              />
              <TextInput
                style={styles.inputProductForm}
                placeholder="Description"
                onChangeText={(input) => this.setState({description: input})}
              />
              <TextInput
                style={styles.inputProductForm}
                placeholder="Berat benda"
                onChangeText={(input) => this.setState({weight: input})}
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

            {/* <Button
              title="Kirim data"
              onPress={() => {
                this.updateUser();
              }}
            /> */}
            {this.state.loading ? (
              <ActivityIndicator color="lime" size="small" />
            ) : (
              <TouchableOpacity onPress={() => this.addProduct()}>
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

export default Home;
