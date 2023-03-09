import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import styled from 'styled-components';

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
  const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #010814;
  `;
  const MyText = styled.Text`
    height: 40px;
    width: 200px;
    margin: 10px;
    padding: 10px;
    //border: 1px solid gray;
    color: #fff;
  `;

  return (
    <Container>
      <ScrollView>
        {characters.map(character => (
          <MyText>{character.name}</MyText>
        ))}
      </ScrollView>

      {/* <FlatList
        data={characters}
        renderItem={({item}) => <MyText> {item.name}</MyText>}
        keyExtractor={item => item.id}
      /> */}
    </Container>
  );
};

export default Characters;
