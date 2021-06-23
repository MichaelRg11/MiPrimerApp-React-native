import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={style.container}>
      <Text style={style.text}>Contador: {contador}</Text>
      <TouchableOpacity
        onPress={() => {
          setContador(contador + 1);
        }}
        style={style.button}
      >
        <Text>+ 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setContador(contador - 1);
        }}
        style={style.button}
      >
        <Text>- 1</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
  },
});
