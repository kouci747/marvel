import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import ConnectForm from '../../components/connectForm';

function ConnectPage() {
  return (
    <>
      <View>
        <Text style={styles.text}>Welcome to the Connect Page</Text>
      </View>
      <ConnectForm />
    </>
  );
}
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

export default ConnectPage;
