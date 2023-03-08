import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the About Screen!</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
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

export default AboutScreen;
