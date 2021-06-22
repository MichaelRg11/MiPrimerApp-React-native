import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HolaMundoScreen = () => {
  const [contador, setContador] = useState(0);
  return (
    <View style={style.container}>
      <Text style={style.style}>Curso de React Native</Text>
      <Text style={style.style}>Contador: {contador}</Text>
      <Text
        onPress={() => {
          setContador(contador + 1);
        }}
        style={style.style}>
        +
      </Text>
      <Text
        onPress={() => {
          setContador(contador - 1);
        }}
        style={style.style}>
        -
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style: {
    fontSize: 50,
  },
});
