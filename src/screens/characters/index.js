import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styled from 'styled-components';

const apikey = '5ce72e18d91433d23c50d67c510a9d05'; //public key
const ts = 1;
const hash = 'ef148cb2a9f389ecad23b18171b44c1e'; //hash md5

const Characters = ({navigation}) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://gateway.marvel.com/v1/public/characters', {
        params: {
          apikey: apikey,
          ts: ts,
          limit: 20,
          offset: page * 20, //limit et offset doivent etre egaux
          hash: hash,
        },
      })
      .then(response => {
        //setCharacters(response.data.data.results);
        setCharacters([...characters, ...response.data.data.results]);
        setPage(page + 1);
        //console.log('my response', response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container>
      {/* <ScrollView>
        {characters.map(character => (
          <TouchableOpacity>
            <MyText>{character.name}</MyText>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

      <FlatList
        data={characters}
        onEndReached={fetchData} //quand le bas de l'écran est atteint, on lance une ft
        keyExtractor={item => item.id} //perfs ++ unique ID pour chaque obj
        onEndReachedThreshold={5}
        renderItem={({item}) => (
          <TouchableOpacity
            title="Go to details page"
            onPress={() =>
              navigation.navigate('Details', {
                characterId: item.id,
              })
            }>
            <MyText> {item.name}</MyText>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

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

export default Characters;
