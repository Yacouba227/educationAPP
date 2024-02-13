import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import app from './../../assets/Images/app.jpg';

export default function LoginScreen() {
  return (
    <View>
      <Image source={app} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 450,
    height: 845,
    alignItems:'center'
  },
});
