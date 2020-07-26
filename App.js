import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, StyleSheet} from 'react-native'
import Index from './src/navigations/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  }
})

