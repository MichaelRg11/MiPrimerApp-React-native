import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
  title: string,
  position: 'br' | 'bl'
  onPress: () => void,
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

  const ios = () => {
    return (
      <View >
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onPress}
          style={[style.fabLocation, position === 'br' ? style.right : style.left]}
        >
          <View
            style={style.fab}
          >
            <Text style={style.fabText}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const android = () => {
    return (
      <View style={[style.fabLocation, position === 'br' ? style.right : style.left]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
        >
          <View
            style={style.fab}
          >
            <Text style={style.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const style = StyleSheet.create({
  fab: {
    alignItems: 'center',
    backgroundColor: '#5856D6',
    padding: 10,
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  fabLocation: {
    position: 'absolute',
    bottom: 10,
  },
  left: {
    left: 10,
  },
  right: {
    right: 10,
  },
  fabText: {
    fontSize: 25,
    color: 'white',
  },
});
