import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import Icon from 'react-native-vector-icons/Ionicons';
import RNFetchBlob from 'rn-fetch-blob';

export default Header = ({navigation}) => {

    RNFetchBlob.fs.ls(RNFetchBlob.fs.dirs.SDCardDir+'/Pictures/RNSketchCanvas/').then(files => {
      console.log(files);
    }).catch(error => console.log(error))
 
    return(
        <View style={{
          height: 60, 
          padding: 15, 
          backgroundColor: 'darkslateblue', 
          width: useDimensions().screen.width,
          flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => {navigation.toggleDrawer()}}><Icon name="menu-outline" size={30} color="white" /></TouchableOpacity>
        </View>
    );
}
