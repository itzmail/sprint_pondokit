import React, {Component} from 'react';
import {Image, Text, TouchableNativeFeedback, View} from 'react-native';
import ImagePicker from 'react-native-image-picker'

export default class Demo extends Component {
  constructor() {
    super();
    this.state = {
      photo: null,
    };
  }

  handleChoosePhoto() {
    console.log('mengambil gambar..');
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
        console.log(response);
      if (response.uri) {
        this.setState({photo: response, edited: true});
        console.log(JSON.stringify(response.fileName));
      }
    });
  }

  render() {
    return (
      <View>
        {this.state.photo == null ? (
          <TouchableNativeFeedback onPress={() => this.handleChoosePhoto()}>
            <View>
              <Text> pilih foto </Text>
            </View>
          </TouchableNativeFeedback>
        ) : (
          <Image
            source={{uri: this.state.photo.uri}}
            style={{width: 100, height: 100}}
          />
        )}
      </View>
    );
  }
}
