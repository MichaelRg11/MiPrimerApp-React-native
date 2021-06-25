import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export const Position = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranje} />
      <Text>hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c4d9',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaNaranje: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  cajaVerde: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // left: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
