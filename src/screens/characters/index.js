import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import axios from 'axios';

const apikey = '5ce72e18d91433d23c50d67c510a9d05'; //public key
const ts = 1;
const hash = 'ef148cb2a9f389ecad23b18171b44c1e'; //hash md5

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('http://gateway.marvel.com/v1/public/characters', {
        params: {
          apikey: apikey,
          ts: ts,
          hash: hash,
        },
      })
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      {characters.map(character => (
        <Text key={character.id}>{character.name}</Text>
      ))}
    </View>
  );
};

export default Characters;
