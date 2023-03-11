import React, {useState, useEffect} from 'react';
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
import styled from 'styled-components';
import DetailScreen from './src/screens/detailScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const GlobalSafeArea = styled.SafeAreaView`
  flex: 1;
`;

// const App = () => {
//   const getMyToken = async () => {
//     const token = await AsyncStorage.getItem('tokenMarvel');
//     console.log('le token sur app', token);
//     if (token) {
//       setIsSignedIn(true);
//     } else {
//       setIsSignedIn(false);
//     }
//   };
//   useEffect(() => {
//     getMyToken();
//   });

//   const [isSignedIn, setIsSignedIn] = useState(false);

//   return (
//     <GlobalSafeArea>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false, //mettre à true pour afficher les headers de toutes les pages
//           }}>
//           <Stack.Screen name="Connect" component={ConnectPage} />
//           <Stack.Screen
//             options={{
//               headerTitle: 'my damn homescreen', //does not appear if headerShown is false
//               headerShown: false,
//               headerTitleAlign: 'center',
//               //headerTransparent: true,
//             }}
//             name="Home"
//             component={HomeScreen}
//           />
//           <Stack.Screen
//             options={{
//               headerTitle: 'my damn connectscreen', //does not appear if headerShown is false
//             }}
//             name="About"
//             component={AboutScreen}
//           />
//           <Stack.Screen name="Characters" component={Characters} />
//           <Stack.Screen name="Details" component={DetailScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </GlobalSafeArea>
//   );
// };

// export default App;

const App = () => {
  const getMyToken = async () => {
    const token = await AsyncStorage.getItem('tokenMarvel');
    console.log('le token sur app', token);
    if (token) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  };

  useEffect(() => {
    getMyToken();
  }, []);

  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <GlobalSafeArea>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Characters" component={Characters} />
              <Stack.Screen name="Details" component={DetailScreen} />
              <Stack.Screen
                options={{
                  headerTitle: 'my damn homescreen',
                  headerShown: false,
                  headerTitleAlign: 'center',
                  headerTransparent: true,
                }}
                name="Home"
                component={HomeScreen}
              />
              <Stack.Screen
                options={{
                  headerTitle: 'my damn aboutscreen',
                  headerShown: true,
                  headerTitleAlign: 'center',
                }}
                name="About"
                component={AboutScreen}
              />
            </>
          ) : (
            <Stack.Screen name="Connect" component={ConnectPage} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalSafeArea>
  );
};

export default App;
