import React from 'react';
import { SafeAreaView } from 'react-native';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { Contador } from './src/screens/Contador';
// import { BoxObjectModel } from './src/screens/BoxObjectModel';
// import { Dimensiones } from './src/screens/Dimensiones';
// import { Position } from './src/screens/Position';
// import { Flex } from './src/screens/Flex';
// import { Tarea } from './src/screens/Tarea/Tarea';
// import { Tarea02 } from './src/screens/Tarea/Tarea02';
// import { Tarea03 } from './src/screens/Tarea/Tarea03';
// import { Tarea04 } from './src/screens/Tarea/Tarea04';
// import { Tarea05 } from './src/screens/Tarea/Tarea05';
// import { Tarea06 } from './src/screens/Tarea/Tarea06';
// import { Tarea07 } from './src/screens/Tarea/Tarea07';
// import { Tarea08 } from './src/screens/Tarea/Tarea08';
// import { Tarea09 } from './src/screens/Tarea/Tarea09';
import { Tarea10 } from './src/screens/Tarea/Tarea10';

export const App = () => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ flex: 1, backgroundColor: '#284258' }}
    >
      {/* <HolaMundoScreen /> */}
      {/* <Contador /> */}
      {/* <BoxObjectModel /> */}
      {/* <Dimensiones /> */}
      {/* <Position /> */}
      {/* <Flex /> */}
      {/* <Tarea08 /> */}
      <Tarea10 />
    </SafeAreaView>
  );
};
