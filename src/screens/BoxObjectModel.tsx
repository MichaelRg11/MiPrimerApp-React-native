import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>hola maicol</Text>
    </View>
  );
};


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingVertical: 100,
    fontSize: 20,
    borderWidth: 10,
  },
});
