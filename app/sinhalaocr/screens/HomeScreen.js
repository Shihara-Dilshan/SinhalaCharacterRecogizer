import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
 
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
 
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text>sss</Text>
        </View>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <SketchCanvas
            style={{ flex: 1 }}
            strokeColor={'red'}
            strokeWidth={7}
          />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
});
 
AppRegistry.registerComponent('example', () => example);