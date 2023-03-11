import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')}
      />

      <Button
        title="Go to Characters page"
        onPress={() => navigation.navigate('Characters')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
