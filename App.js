import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


var testString = "Hello, World!";

export default class App extends React.Component {
  state = {
    barber : ""
  }
  componentDidMount(){
    axios.get('https://kysolqk4pc.execute-api.us-east-1.amazonaws.com/beta/findBarber/')
      .then(response => {
        const barber = response.data;
        this.setState({ barber });
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.barber.Name}</Text>
        <Text>{this.state.barber.Location}</Text>
        <Text>{this.state.barber.Salon}</Text>
        <Text>{this.state.barber.Portfolio}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
