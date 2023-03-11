import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';

function DetailScreen({route}) {
  const [characterDetail, setCharacterDetail] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const apikey = '5ce72e18d91433d23c50d67c510a9d05'; //public key
  const ts = 1;
  const hash = 'ef148cb2a9f389ecad23b18171b44c1e'; //hash md5

  const fetchData = () => {
    axios
      .get(`http://gateway.marvel.com/v1/public/characters/${characterId}`, {
        params: {
          apikey: apikey,
          ts: ts,

          hash: hash,
        },
      })
      .then(response => {
        //setCharacters(response.data.data.results);
        setCharacterDetail(response.data.data.results[0]);
        //tu me retournes la response avec l'array 0
        console.log(response.data.data.results[0]);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const {characterId} = route.params;
  return (
    <Container>
      <MyTextInput>character No. {characterId}</MyTextInput>
      <MyTextInput>{characterDetail.name}</MyTextInput>

      <MyImage
        source={{
          uri: characterDetail.thumbnail
            ? `${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`
            : 'https://fr.web.img2.acsta.net/pictures/18/12/03/08/53/5968896.jpg',
        }}
      />
      <Text style={{color: 'white', textAlign: 'justify', margin: 30}}>
        {characterDetail.description
          ? characterDetail.description
          : 'no description'}
      </Text>
    </Container>
  );
}
const MyImage = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 50px;
  align-content: center;
`;
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

  color: #fff;
`;

export default DetailScreen;
