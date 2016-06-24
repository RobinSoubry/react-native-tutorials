/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

class AwesomeProject extends Component {
  constructor() {
      super();

      this.state = {
        name: "",
      };
    }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to Greenland <Text>{this.state.name}</Text>!
      </Text>
      <Image source={require('./images/test.jpg')}
        style={styles.image}
      />
      <TextInput
        placeholder="Enter your name"
        style={styles.inputText}
        onChangeText={(text) => this.setState({ name: text })}
        value={this.state.name}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 400,
    height: 450,
    marginRight: 0,
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    backgroundColor: 'silver',
    padding: 10,
    color: 'black',
    marginTop: 5,
},
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
