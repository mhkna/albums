import React from 'react';
import { Text } from 'react-native';
import Card from './Card.js';


const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
