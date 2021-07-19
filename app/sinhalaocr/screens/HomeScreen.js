import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions
} from 'react-native';
import Header from '../components/Header';
import Example from '../components/Example';

 
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
 
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
       navigation : props.navigation
    };
  }
  render() {
    return (
      <>
      <StatusBar backgroundColor={'darkslateblue'}  />
      <View style={styles.container}>
        <Header navigation={this.state.navigation}/>
        <View style={{ flex: 10, flexDirection: 'row' }}>
          {/* <SketchCanvas
            style={{ flex: 1 }}
            strokeColor={'red'}
            strokeWidth={7}
          /> */}
          <Example />
        </View>
        
      </View>
      </>
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
  header: {
    height: 60, padding: 15, 
    backgroundColor: 'darkslateblue', 
    width: Dimensions.get('window').width, 
    flexDirection: 'row'
  }
});
 
