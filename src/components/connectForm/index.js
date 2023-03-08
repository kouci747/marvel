import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
/*
question au prof : commment récupérer le toekn renvoyé par 
Pas besoin de créer un utilisateur, cette API renvoie un token de connexion lorsque les deux champs ci-dessus sont envoyés.

*/
const ConnectForm = () => {
  const [formValues, setFormValues] = useState({username: '', password: ''});

  const handleInputChange = (inputName, value) => {
    setFormValues({...formValues, [inputName]: value});
  };

  const handleSubmit = async () => {
    // La logique de la soumission du formulaire
    if (formValues.username.length < 3 || formValues.password.length < 8) {
      alert('username must be min 3 chars and password at least 8 chars');
    } else {
      fetch('https://login.hikkary.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })
        .then(response => {
          if (response.ok) {
            // Handle successful login
            console.log('bref', response.json());
            return response.json();
          } else {
            // Handle login error
            throw new Error('Login error');
            //console.log('login erreur 1');
          }
        })
        .then(data => {
          console.log('Login successful:', data);
          alert('bienvenue');
        })
        .catch(error => {
          // Handle network or login error
          console.error('Error:', error);
          //console.log('login erreur 2 ');
        });
    }
    //console.log(formValues.password.length);
  };

  return (
    <View>
      <TextInput
        value={formValues.username}
        onChangeText={value => handleInputChange('username', value)}
        placeholder="Enter your username"
      />
      <TextInput
        value={formValues.password}
        secureTextEntry={true}
        onChangeText={value => handleInputChange('password', value)}
        placeholder="Enter your password"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ConnectForm;
