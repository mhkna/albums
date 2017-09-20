// import library to help create component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';


// create a component

const App = () => {
  return (
    //add view tag because cant return two children in one function otherwise
    <View>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};


// render it to the device

AppRegistry.registerComponent('albums', () => App);
