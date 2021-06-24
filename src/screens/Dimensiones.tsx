import React from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const Dimensiones = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{ ...styles.cajaMorada, width: width * 0.2 }} />
        <View style={styles.cajaNaranja} />
        <Text style={styles.text}>W: {width}, H: {height}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
