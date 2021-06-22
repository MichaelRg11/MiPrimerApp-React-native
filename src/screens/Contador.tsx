import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={style.container}>
      <Text style={style.text}>Contador: {contador}</Text>
      <Button
        onPress={() => {
          setContador(contador + 1);
        }}
        title="+ 1"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          setContador(contador - 1);
        }}
        title="- 1"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
