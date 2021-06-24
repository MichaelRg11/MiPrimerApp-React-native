import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { Contador } from './src/screens/Contador';
// import { BoxObjectModel } from './src/screens/BoxObjectModel';
import { Dimensiones } from './src/screens/Dimensiones';

export const App = () => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ flex: 1 }}
    >
      {/* <HolaMundoScreen /> */}
      {/* <Contador /> */}
      {/* <BoxObjectModel /> */}
      <Dimensiones />
    </SafeAreaView>
  );
};
