import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from './../components/Fab';

export const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={style.container}>
      <Text style={style.text}>Contador: {contador}</Text>
      <Fab
        title="+ 1"
        onPress={() => {
          setContador(contador + 1);
        }}
        position="br"
      />
      <Fab
        title="- 1"
        onPress={() => {
          setContador(contador - 1);
        }}
        position="bl"
      />
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
});
