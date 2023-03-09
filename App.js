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
import Characters from './src/screens/characters';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <View></View>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, //mettre à true pour afficher les headers de toutes les pages
          }}>
          <Stack.Screen
            options={{
              headerTitle: 'my damn homescreen', //does not appear if headerShown is false
              headerShown: false,
              headerTitleAlign: 'center',
              //headerTransparent: true,
            }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              headerTitle: 'my damn connectscreen', //does not appear if headerShown is false
            }}
            name="About"
            component={AboutScreen}
          />
          <Stack.Screen name="Connect" component={ConnectPage} />
          <Stack.Screen name="Characters" component={Characters} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
