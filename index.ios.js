// import library to help create component

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';


// create a component

const App = () => {
  return (
    <Header />
  );
};


// render it to the device

AppRegistry.registerComponent('albums', () => App);
