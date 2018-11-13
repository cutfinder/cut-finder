import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
//import loginservices from '../processes/login-services';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {search : ''}
  }

  search() {

  }

  render() {
    return (
      <View  style = {styles.container}>
        <Text style = {{marginLeft : 10 }}>{this.props.navigation.getParam('name')}</Text>
        <TextInput style = {styles.inputContainer}
                    placeholder = "Enter a Barber Name"
                    onChangeText = {(search) => this.setState({search})}/>
        <TouchableOpacity onPress = {this.search.bind(this)}
                style = {styles.buttonContainer}>
            <Text>Search</Text>
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
    backgroundColor : '#DDDDDD',
    padding : 10,
    marginLeft : 10,
    width : 100
  },
  container: {
    flex: 1,
    backgroundColor : '#ffffff',
    padding : 10
  },
});

export default login;
