import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default Header = ({navigation}) => {
    return(
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {navigation.toggleDrawer()}}><Icon name="menu-outline" size={30} color="white" /></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      height: 60, padding: 15, 
      backgroundColor: 'darkslateblue', 
      width: Dimensions.get('window').width, 
      flexDirection: 'row'
    }
  });
   