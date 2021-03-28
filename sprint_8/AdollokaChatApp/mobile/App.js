import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// Import Package
import io from "socket.io-client"

class App extends Component {

  constructor(props) { 
    super(props);
    this.state = { 
      chatMessage : "",
      chatMessages : []
    }
  }

  componentDidMount(){
    // Koneksi ke Socket
    this.socket = io("http://192.168.43.53:3000");
    this.socket.on("chat message", msg => {
      this.setState({ chatMessages : [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage() { 
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({chatMessage : ""})
  }

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => <Text key ={chatMessage}>{chatMessage}</Text>)
    return (
      <View style={styles.container}>
        <Text>Tulisan Pesan: </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TextInput 
          style={{height : 40, borderWidth : 2, width: 300 }}
          autoCorrect={false}
          value = { this.state.chatMessage}
          onChangeText={chatMessage => {
            this.setState({chatMessage});
          }}
          onSubmitEditing={() => this.submitChatMessage()}
        />
        <TouchableOpacity onPress={() => this.submitChatMessage()}>
          <Image source={require('./src/assets/icons/send-button.png')} style={styles.button}/>
        </TouchableOpacity>
        </View>
        {chatMessages}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 30,
    height: 30,
    alignSelf: 'center'
  }
});

export default App;
