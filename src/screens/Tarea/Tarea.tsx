import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Tarea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284258',
  },
  cajaNaranja: {
    width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    flex: 1,
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
  },

});
