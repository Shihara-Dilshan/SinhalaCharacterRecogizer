import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import Header from '../components/Header';
import Example from '../components/Example';
import RNFetchBlob from 'rn-fetch-blob';
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';
 
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
 
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
       navigation : props.navigation
    };
  }

  upload = () => {
    RNFetchBlob.fs.ls(RNFetchBlob.fs.dirs.SDCardDir+'/Pictures/RNSketchCanvas/').then(async(files) => {
      const reference = storage().ref(files[files.length-1]+'.png');
      await reference.putFile((RNFetchBlob.fs.dirs.SDCardDir+'/Pictures/RNSketchCanvas/'+files[files.length-1]).toString());
      const url = await storage().ref(files[files.length-1]+'.png').getDownloadURL();
      console.log(url)
    })
    .then( async() => {
      alert('successfully')
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <>
      <StatusBar backgroundColor={'darkslateblue'}  />
      <View style={styles.container}>
        <Header navigation={this.state.navigation} upload={this.upload}/>
        <View stye={{flex: 1}}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
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
 
