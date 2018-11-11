import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {username : '', password : ''}
  }

  login() {

  }

  render() {
    return (
      <View style = {{padding : 10}}>
        <TextInput style = {styles.inputContainer}
                    placeholder = "Username"
                    onChangeText = {(username) => this.setState({username})}/>
        <TextInput style = {styles.inputContainer}
                    placeholder = "Password"
                    onChangeText = {(password) => this.setState({password})}/>
        <TouchableOpacity onPress = {login}
                style = {styles.buttonContainer}>
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    height : 40,
    borderWidth : 0.25,
    padding : 10,
    borderRadius : 25,
    width : 300,
    margin : 5
  },
  buttonContainer: {
    alignItems : 'center',
    alignSelf : 'center',
    backgroundColor : '#DDDDDD',
    padding : 10,
    width : 100
  },
});
