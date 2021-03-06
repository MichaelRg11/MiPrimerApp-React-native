import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Tarea06 = () => {
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
    flexDirection: 'column',
    backgroundColor: '#284258',
    // justifyContent: 'space-between',
  },
  cajaMorada: {
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
    flex: 1,
  },
  cajaNaranja: {
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    flex: 1,
  },
  cajaAzul: {
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
    flex: 2,
  },

});
