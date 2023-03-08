import React from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/homeScreen';
import AboutScreen from './src/screens/aboutScreen';
import ConnectPage from './src/screens/connectPage';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <View>
        <Text>Projet Marvel</Text>
      </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Connect" component={ConnectPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
