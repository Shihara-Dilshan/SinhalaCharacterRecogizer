import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Header from '../components/Header';

export default function NotificationsScreen({ navigation }) {
    return (
        <View style={{flex:1}}>
            <Header navigation={navigation}/>
            <View style={style.container}>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }       
});