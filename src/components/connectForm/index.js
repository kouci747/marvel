import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import styled from 'styled-components';
import MarvelLogo from '../../components/marvelLogo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

/*
question au prof : commment récupérer le toekn renvoyé par 
Pas besoin de créer un utilisateur, cette API renvoie un token de connexion lorsque les deux champs ci-dessus sont envoyés.

*/

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #010814;
`;

const MyTextInput = styled.TextInput`
  height: 40px;
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  color: #fff;
`;

const ConnectForm = () => {
  const navigation = useNavigation();
  const [formValues, setFormValues] = useState({username: '', password: ''});

  const handleInputChange = (inputName, value) => {
    setFormValues({...formValues, [inputName]: value});
  };

  const handleSubmit = async () => {
    // La logique de la soumission du formulaire
    if (formValues.username.length < 3 || formValues.password.length < 8) {
      alert('username must be min 3 chars and password at least 8 chars');
    } else {
      //console.log(formValues);
      fetch('https://login.hikkary.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formValues.username,
          password: formValues.password,
        }),
      })
        .then(response => {
          if (response.ok) {
            // Handle successful login
            console.log('bref', response);
            return response;
          } else {
            // Handle login error
            throw new Error('Login error');
            //console.log('login erreur 1');
          }
        })
        .then(data => {
          token = data.headers.get('x-access-token');
          AsyncStorage.setItem('tokenMarvel', token);
          console.log('le token : ', token);
          //console.log('Login successful:', data);
          alert('bienvenue');
          //navigation.navigate('Characters');
          navigation.navigate('Characters');
        })
        .catch(error => {
          // Handle network or login error
          console.error('Error:', error);
          console.log('login erreur 2 ');
        });
    }
    //console.log(formValues.password.length);
  };

  return (
    <Container>
      <MarvelLogo />
      <MyTextInput
        value={formValues.username}
        onChangeText={value => handleInputChange('username', value)}
        placeholder="Enter your username"
      />
      <MyTextInput
        value={formValues.password}
        secureTextEntry={true}
        onChangeText={value => handleInputChange('password', value)}
        placeholder="Enter your password"
      />
      <Button title="Login" onPress={handleSubmit} />
    </Container>
  );
};

export default ConnectForm;
