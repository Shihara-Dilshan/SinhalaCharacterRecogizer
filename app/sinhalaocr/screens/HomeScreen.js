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
import axios from 'axios';
 
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
 
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
       navigation : props.navigation,
       isLoading: false
    };
  }

  upload = () => {
    this.setState({isLoading: true});
    RNFetchBlob.fs.ls(RNFetchBlob.fs.dirs.SDCardDir+'/Pictures/RNSketchCanvas/').then(async(files) => {
      const reference = storage().ref(files[files.length-1]+'.png');
      await reference.putFile((RNFetchBlob.fs.dirs.SDCardDir+'/Pictures/RNSketchCanvas/'+files[files.length-1]).toString());
      const url = await storage().ref(files[files.length-1]+'.png').getDownloadURL();
      const response = await this.sendData(url);
      console.log(response)
    })
    .then( async() => {
      this.setState({isLoading: false});
    })
    .catch(error => {
      this.setState({isLoading: false});
    })
  }

  sendData = (url) => {
    return new Promise( (resolve, reject) => {
      axios
          .post('http://192.168.8.101:5000/ocr', {
            "url": url
          })
          .then( res => {
            console.log(res.data)
            alert("Predicted character is : "+ res.data.predicted)
            resolve("ok");
          })
          .catch(err => {
            reject(err);
          })
    });
  }


  render() {
    return (
      <>
      <StatusBar backgroundColor={'darkslateblue'}  />
      <View style={styles.container}>
        <Header navigation={this.state.navigation} upload={this.upload}/>
        <View stye={{flex: 1}}>
          <ActivityIndicator size="small" color={this.state.isLoading === true ? "#0000ff" : "transparent"} />
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
 
