import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {username : '', password : ''}
  }

  render() {
    return (
      <View style = {{padding : 10}}>
        <TextInput style = {{height : 40, borderWidth : 1, padding : 10}}
                    placeholder = "Username"
                    onChangeText = {(username) => this.setState({username})}/>
        <TextInput style = {{height : 40, borderWidth : 1, padding : 10}}
                    placeholder = "Password"
                    onChangeText = {(password) => this.setState({password})}/>
      </View>
    );
  }
}
