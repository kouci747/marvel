import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import logo from '../../public/marvelLogo.png';

const MarvelLogo = () => {
  return (
    <View>
      <Image source={logo} style={{width: 200, height: 100}} />
    </View>
  );
};

export default MarvelLogo;
