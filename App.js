import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
// import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { name as appName } from './app.json';

class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Text>
          Hello!
        </Text>
      </PaperProvider>
    )
  }
}

export default App